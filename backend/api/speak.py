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

@router.post("/speak")
async def speak(request: SpeakRequest):
    """
    Convert text to speech using RVC voice server
    """
    try:
        voice_server_url = os.getenv("VOICE_SERVER_URL", "http://localhost:8000")
        
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                f"{voice_server_url}/speak",
                json={"text": request.text},
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code != 200:
                logger.error(f"Voice server error: {response.status_code} - {response.text}")
                raise HTTPException(
                    status_code=503, 
                    detail="Voice server unavailable"
                )
            
            # Stream the audio response back to the client
            def audio_stream():
                for chunk in response.iter_bytes(chunk_size=4096):
                    if chunk:
                        yield chunk
            
            return StreamingResponse(
                audio_stream(),
                media_type="audio/wav",
                headers={
                    "Content-Disposition": f"attachment; filename=bmo_speech.wav"
                }
            )
            
    except httpx.ConnectError:
        logger.error("Cannot connect to voice server")
        raise HTTPException(
            status_code=503,
            detail="Voice server is not running. Please start the BMO voice server."
        )
    except Exception as e:
        logger.error(f"Error in speak endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to generate speech")

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
