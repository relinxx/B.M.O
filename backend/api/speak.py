import os
import httpx
import logging
from typing import Optional
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from fastapi.responses import StreamingResponse
import asyncio

logger = logging.getLogger(__name__)
router = APIRouter()

class SpeakRequest(BaseModel):
    text: str

class SpeakResponse(BaseModel):
    message: str
    audio_url: Optional[str] = None

VOICE_SERVER_URL = os.getenv("VOICE_SERVER_URL", "http://localhost:8000")

async def synthesize_speech(text: str) -> bytes:
    """
    Generate speech using voice server with in-memory audio generation
    """
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                f"{VOICE_SERVER_URL}/speak",
                json={"text": text},
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                return response.content
            else:
                raise Exception(f"Voice server error: {response.status_code}")
                
    except httpx.TimeoutException:
        raise Exception("Voice server request timed out")
    except Exception as e:
        raise Exception(f"Failed to synthesize speech: {str(e)}")

@router.post("/speak")
async def speak(request: SpeakRequest):
    """
    Convert text to speech using voice server with in-memory audio generation
    """
    try:
        audio_content = await synthesize_speech(request.text)
        
        return StreamingResponse(
            iter([audio_content]),
            media_type="audio/mpeg",  # Use audio/mpeg for MP3
            headers={
                "Content-Disposition": f"attachment; filename=bmo_speech.mp3"
            }
        )
            
    except httpx.ConnectError:
        logger.error("Cannot connect to voice server")
        raise HTTPException(
            status_code=503,
            detail="Voice server is not running. Please start to BMO voice server."
        )
    except Exception as e:
        logger.error(f"Speech synthesis error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate speech: {str(e)}"
        )

@router.get("/speak/health", response_model=SpeakResponse)
async def speak_health():
    """
    Check if voice server is available
    """
    try:
        voice_server_url = os.getenv("VOICE_SERVER_URL", "http://localhost:8000")
        
        async with httpx.AsyncClient(timeout=5.0) as client:
            response = await client.get(f"{voice_server_url}/")
            
            if response.status_code == 200:
                return SpeakResponse(message="Voice server is available")
            else:
                return SpeakResponse(message="Voice server is responding with errors")
                
    except httpx.ConnectError:
        return SpeakResponse(message="Voice server is not running")
    except Exception as e:
        logger.error(f"Error checking voice server health: {str(e)}")
        return SpeakResponse(message="Failed to check voice server status")
