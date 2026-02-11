import os
import logging
import tempfile
try:
    import whisper
    WHISPER_AVAILABLE = True
except ImportError:
    WHISPER_AVAILABLE = False
    logging.warning("Whisper not available, STT functionality disabled")

from fastapi import APIRouter, HTTPException, UploadFile, File
from pydantic import BaseModel

logger = logging.getLogger(__name__)
router = APIRouter()

class STTRequest(BaseModel):
    audio_data: bytes  # Base64 encoded audio data

class STTResponse(BaseModel):
    text: str
    confidence: float
    language: str

# Load Whisper model (will download on first run)
whisper_model = None
if WHISPER_AVAILABLE:
    try:
        whisper_model = whisper.load_model("base")
        logger.info("Whisper model loaded successfully")
    except Exception as e:
        logger.error(f"Failed to load Whisper model: {str(e)}")
        WHISPER_AVAILABLE = False

@router.post("/stt", response_model=STTResponse)
async def speech_to_text(audio_file: UploadFile = File(...)):
    """
    Convert speech to text using Whisper
    """
    if not WHISPER_AVAILABLE or whisper_model is None:
        raise HTTPException(
            status_code=503, 
            detail="Speech-to-text service not available"
        )
    
    try:
        # Save uploaded audio to temporary file
        with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp_file:
            content = await audio_file.read()
            temp_file.write(content)
            temp_file_path = temp_file.name
        
        try:
            # Transcribe audio using Whisper
            result = whisper_model.transcribe(temp_file_path)
            
            text = result.get("text", "").strip()
            language = result.get("language", "en")
            
            if not text:
                return STTResponse(
                    text="",
                    confidence=0.0,
                    language=language
                )
            
            # Calculate confidence (Whisper doesn't provide direct confidence, so we'll use a simple heuristic)
            confidence = min(1.0, len(text.split()) / 10.0)  # Simple confidence based on text length
            
            return STTResponse(
                text=text,
                confidence=confidence,
                language=language
            )
            
        finally:
            # Clean up temporary file
            os.unlink(temp_file_path)
            
    except Exception as e:
        logger.error(f"Error in speech-to-text: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to transcribe audio")

@router.get("/stt/health")
async def stt_health():
    """
    Check if STT service is available
    """
    if not WHISPER_AVAILABLE or whisper_model is None:
        return {"status": "unavailable", "message": "Whisper model not loaded"}
    
    return {"status": "available", "message": "Speech-to-text service is ready"}
