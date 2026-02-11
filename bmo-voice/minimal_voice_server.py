import os
import asyncio
import uuid
import logging
from concurrent.futures import ThreadPoolExecutor

from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

import edge_tts

# =========================
# CONFIG
# =========================

TMP_DIR = "tmp_audio"
os.makedirs(TMP_DIR, exist_ok=True)

BASE_VOICE = "en-US-AnaNeural"
PITCH = "+15Hz"
RATE = "+10%"

MAX_WORKERS = 2

# =========================
# LOGGING
# =========================

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("BMO-VOICE")

# =========================
# FASTAPI
# =========================

app = FastAPI(title="BMO Voice Server (Minimal)")

class SpeakRequest(BaseModel):
    text: str

executor = ThreadPoolExecutor(max_workers=MAX_WORKERS)

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

def generate_voice_sync(text: str) -> str:
    uid = str(uuid.uuid4())
    base_mp3 = os.path.join(TMP_DIR, f"{uid}_base.mp3")

    # Edge-TTS
    asyncio.run(edge_tts_generate(text, base_mp3))

    return base_mp3

# =========================
# API
# =========================

@app.post("/speak")
async def speak(req: SpeakRequest):
    if not req.text.strip():
        raise HTTPException(status_code=400, detail="Empty text")

    loop = asyncio.get_event_loop()

    try:
        mp3_path = await loop.run_in_executor(executor, generate_voice_sync, req.text)
    except Exception as e:
        logger.exception(e)
        raise HTTPException(status_code=500, detail=str(e))

    def audio_stream():
        with open(mp3_path, "rb") as f:
            while True:
                chunk = f.read(4096)
                if not chunk:
                    break
                yield chunk

    return StreamingResponse(audio_stream(), media_type="audio/mpeg")

@app.get("/")
async def root():
    return {"message": "BMO Voice Server (Minimal) is running", "status": "healthy"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "bmo-voice-minimal"}

# =========================
# TEST MODE
# =========================

if __name__ == "__main__":
    print("BMO Voice Server (Minimal) Ready")
    print("Testing local generation...")

    test_text = "Who wants to play video games?"

    out = generate_voice_sync(test_text)
    print("Generated:", out)

    print("Starting API server...")
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
