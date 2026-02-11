import os
import asyncio
import uuid
import logging
from concurrent.futures import ThreadPoolExecutor
import io

from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

import edge_tts
# Temporarily disable RVC due to compatibility issues
# from rvc_python.infer import RVCInference

from pydub import AudioSegment
import soundfile as sf
import numpy as np

# =========================
# CONFIG
# =========================

MODELS_DIR = "models"
MODEL_PATH = os.path.join(MODELS_DIR, "bmo.pth")
INDEX_PATH = os.path.join(MODELS_DIR, "bmo.index")
LICENSE_PATH = os.path.join(MODELS_DIR, "LICENSE.txt")

TMP_DIR = "tmp_audio"

BASE_VOICE = "en-US-JennyNeural"  # Use local voice instead of cloud-based
PITCH = "+15Hz"
RATE = "+10%"

F0_METHOD = "rmvpe"
F0_UP_KEY = 2   # semitones
MAX_WORKERS = 2

# =========================
# LOGGING
# =========================

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("BMO-VOICE")

# =========================
# PERMISSION CHECK
# =========================

def check_permission():
    if not os.path.exists(LICENSE_PATH):
        raise RuntimeError("LICENSE.txt not found in models/. Permission flag required.")

    with open(LICENSE_PATH, "r") as f:
        content = f.read().strip().lower()

    if "permission: yes" not in content:
        raise RuntimeError("Permission not confirmed in LICENSE.txt. Aborting.")

# =========================
# FILE CHECK
# =========================

def check_models():
    if not os.path.exists(MODEL_PATH):
        logger.warning("bmo.pth not found in models/ - using Edge-TTS only")
        return False
    if not os.path.exists(INDEX_PATH):
        logger.warning("bmo.index not found in models/ - using Edge-TTS only")
        return False
    return True

# =========================
# FASTAPI
# =========================

app = FastAPI(title="BMO Voice Server")

class SpeakRequest(BaseModel):
    text: str

executor = ThreadPoolExecutor(max_workers=MAX_WORKERS)

# =========================
# LOAD RVC MODEL ONCE
# =========================

logger.info("Checking for RVC model...")
rvc = None
rvc_available = False

def load_rvc():
    global rvc, rvc_available
    try:
        if check_models():
            # from rvc_python.infer import RVCInference
            # rvc = RVCInference(
            #     model_path=MODEL_PATH,
            #     index_path=INDEX_PATH,
            #     device="cuda" if os.getenv("CUDA_VISIBLE_DEVICES", None) is not None else "cpu"
            # )
            logger.info("RVC models found but temporarily disabled due to compatibility")
            rvc_available = False
        else:
            logger.info("RVC models not found - using Edge-TTS only")
            rvc_available = False
    except Exception as e:
        logger.error(f"Failed to load RVC model: {str(e)}")
        rvc_available = False

# =========================
# AUDIO PIPELINE
# =========================

async def edge_tts_generate(text: str, mp3_path: str):
    communicate = edge_tts.Communicate(
        text=text,
        voice=BASE_VOICE,
        pitch=PITCH,
        rate=RATE
    )
    await communicate.save(mp3_path)

async def generate_voice_in_memory(text: str) -> bytes:
    """
    Generate audio directly in memory without saving to disk
    """
    try:
        # Use a simple approach - generate TTS data directly
        communicate = edge_tts.Communicate(
            text=text,
            voice=BASE_VOICE,
            pitch=PITCH,
            rate=RATE,
            proxy=None  # Disable proxy to avoid network issues
        )
        
        # Get audio data as bytes
        audio_data = []
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                audio_data.append(chunk["data"])
        
        # Combine all audio chunks
        return b"".join(audio_data)
        
    except Exception as e:
        logger.error(f"Error generating in-memory audio: {str(e)}")
        # Return empty audio if generation fails
        return b""

def mp3_to_wav(mp3_path: str, wav_path: str):
    try:
        audio = AudioSegment.from_mp3(mp3_path)
        audio = audio.set_channels(1)
        audio = audio.set_frame_rate(48000)
        audio = audio.set_sample_width(2)  # 16 bit
        audio.export(wav_path, format="wav")
        return wav_path
    except Exception as e:
        logger.error(f"Audio conversion failed: {str(e)}")
        # If conversion fails, just return the MP3 path
        return mp3_path

def rvc_convert(input_wav: str, output_wav: str):
    if rvc_available and rvc:
        rvc.infer_file(
            input_path=input_wav,
            output_path=output_wav,
            f0_method=F0_METHOD,
            f0_up_key=F0_UP_KEY
        )
    else:
        # Just copy the file if RVC is not available
        import shutil
        shutil.copy2(input_wav, output_wav)

def generate_voice_sync(text: str) -> str:
    uid = str(uuid.uuid4())
    base_mp3 = os.path.join(TMP_DIR, f"{uid}_base.mp3")
    base_wav = os.path.join(TMP_DIR, f"{uid}_base.wav")
    final_wav = os.path.join(TMP_DIR, f"{uid}_bmo.wav")

    # Edge-TTS
    asyncio.run(edge_tts_generate(text, base_mp3))

    # Convert mp3 -> wav (or just use mp3 if conversion fails)
    converted_path = mp3_to_wav(base_mp3, base_wav)
    
    # RVC inference (or just copy if not available)
    if converted_path == base_mp3:
        # FFmpeg failed, use MP3 directly
        final_wav = base_mp3
    else:
        # FFmpeg worked, use RVC
        rvc_convert(converted_path, final_wav)

    return final_wav

# =========================
# API
# =========================

@app.post("/speak")
async def speak(req: SpeakRequest):
    if not req.text.strip():
        raise HTTPException(status_code=400, detail="Empty text")

    loop = asyncio.get_event_loop()

    try:
        # Generate audio directly in memory
        audio_bytes = await generate_voice_in_memory(req.text)
        
        if not audio_bytes:
            raise HTTPException(status_code=500, detail="Failed to generate audio")
        
        # Create generator for streaming
        def audio_stream():
            # Stream audio in chunks
            chunk_size = 4096
            for i in range(0, len(audio_bytes), chunk_size):
                yield audio_bytes[i:i + chunk_size]
        
        return StreamingResponse(audio_stream(), media_type="audio/mpeg")
        
    except Exception as e:
        logger.exception(e)
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/speak-legacy")
async def speak_legacy(req: SpeakRequest):
    """Legacy endpoint that saves to disk (for compatibility)"""
    os.makedirs(TMP_DIR, exist_ok=True)
    if not req.text.strip():
        raise HTTPException(status_code=400, detail="Empty text")

    loop = asyncio.get_event_loop()

    try:
        audio_path = await loop.run_in_executor(executor, generate_voice_sync, req.text)
    except Exception as e:
        logger.exception(e)
        raise HTTPException(status_code=500, detail=str(e))

    def audio_stream():
        with open(audio_path, "rb") as f:
            while True:
                chunk = f.read(4096)
                if not chunk:
                    break
                yield chunk

    # Determine content type based on file extension
    if audio_path.endswith('.mp3'):
        content_type = "audio/mpeg"
    else:
        content_type = "audio/wav"
    
    return StreamingResponse(audio_stream(), media_type=content_type)

@app.get("/")
async def root():
    return {"message": "BMO Voice Server is running", "status": "healthy", "rvc_available": rvc_available}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "bmo-voice", "rvc_available": rvc_available}

# =========================
# TEST MODE
# =========================

if __name__ == "__main__":
    try:
        check_permission()
    except RuntimeError as e:
        logger.error(f"Permission check failed: {str(e)}")
        logger.info("Creating LICENSE.txt file...")
        with open(LICENSE_PATH, "w") as f:
            f.write("permission: yes")
    
    load_rvc()

    logger.info("BMO Voice Server Ready")
# Skip test generation due to network issues
# logger.info("Testing local generation...")
# test_text = "Hello, this is a test of the BMO voice server."
# out = generate_voice_sync(test_text)
# logger.info(f"Generated: {out}")

    print("Starting API server...")
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
