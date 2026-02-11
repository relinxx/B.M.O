import io
import logging
import os

from fastapi import APIRouter, File, HTTPException, UploadFile
from pydantic import BaseModel

try:
    from openai import OpenAI
except Exception:
    OpenAI = None


logger = logging.getLogger(__name__)
router = APIRouter()


class STTResponse(BaseModel):
    text: str
    confidence: float


def _get_openai_client() -> "OpenAI":
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise HTTPException(status_code=503, detail="OPENAI_API_KEY is not set")
    if OpenAI is None:
        raise HTTPException(status_code=503, detail="openai package is not available")
    return OpenAI(api_key=api_key)


@router.post("/stt")
async def speech_to_text(audio_file: UploadFile = File(...)):
    """Convert speech to text using OpenAI transcription."""
    try:
        audio_bytes = await audio_file.read()
        if not audio_bytes:
            raise HTTPException(status_code=400, detail="Empty audio file")

        filename = audio_file.filename or "recording.webm"
        content_type = audio_file.content_type or "application/octet-stream"
        logger.info(
            f"Received audio file: {filename}, type: {content_type}, size: {len(audio_bytes)} bytes"
        )

        client = _get_openai_client()

        file_obj = io.BytesIO(audio_bytes)
        file_obj.name = filename

        result = client.audio.transcriptions.create(
            model="whisper-1",
            file=file_obj,
        )

        text = (getattr(result, "text", None) or "").strip()
        if not text:
            return STTResponse(text="", confidence=0.0)

        return STTResponse(text=text, confidence=1.0)

    except HTTPException:
        raise
    except Exception as e:
        logger.exception(e)
        raise HTTPException(status_code=500, detail=f"Speech-to-text failed: {str(e)}")

@router.post("/stt/upload")
async def speech_to_text_upload(file: UploadFile = File(...)):
    """
    Convert speech to text from uploaded audio file
    """
    return await speech_to_text(file)

@router.get("/stt/health")
async def stt_health():
    """
    Check STT service health
    """
    return {"status": "healthy", "service": "speech-to-text", "provider": "openai"}
