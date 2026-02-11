import os
import logging
import random
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

from llm_providers.openai_provider import OpenAIProvider
from memory.memory_manager import MemoryManager

logger = logging.getLogger(__name__)
router = APIRouter()

class ThinkRequest(BaseModel):
    text: str
    conversation_id: Optional[str] = None
    context: Optional[dict] = None

class ThinkResponse(BaseModel):
    response: str
    conversation_id: str
    context_used: bool

# Initialize providers
openai_provider = OpenAIProvider()
memory_manager = MemoryManager()

# Simple BMO responses for fallback
BMO_RESPONSES = [
    "That sounds fun! I love playing video games!",
    "Oh wow! Can we go on an adventure?",
    "I'm BMO! Let's be friends forever!",
    "Video games are the best! Want to play?",
    "Yay! I'm so excited to talk to you!",
    "That's awesome! You're my best friend!",
    "Let's go explore together!",
    "I'm ready for anything! What should we do?",
    "BMO is here to help! What do you need?",
    "I love making new friends like you!"
]

@router.post("/think", response_model=ThinkResponse)
async def think(request: ThinkRequest):
    """
    Process user input and generate BMO's response using LLM with memory context
    """
    try:
        # Try to get relevant memories for context
        memories = await memory_manager.get_relevant_memories(request.text)
        
        # Try OpenAI first
        try:
            # Build BMO personality prompt
            bmo_prompt = _build_bmo_prompt(request.text, memories)
            
            # Generate response using OpenAI
            response = await openai_provider.generate_response(bmo_prompt)
            
            # Store interaction in memory
            conversation_id = request.conversation_id or _generate_conversation_id()
            await memory_manager.store_interaction(
                conversation_id=conversation_id,
                user_input=request.text,
                bmo_response=response,
                context=request.context
            )
            
            return ThinkResponse(
                response=response,
                conversation_id=conversation_id,
                context_used=len(memories) > 0
            )
            
        except Exception as e:
            logger.warning(f"OpenAI failed, using fallback: {str(e)}")
            
            # Fallback to simple BMO responses
            response = random.choice(BMO_RESPONSES)
            
            conversation_id = request.conversation_id or _generate_conversation_id()
            
            return ThinkResponse(
                response=response,
                conversation_id=conversation_id,
                context_used=False
            )
        
    except Exception as e:
        logger.error(f"Error in think endpoint: {str(e)}")
        # Always return a response, never fail
        return ThinkResponse(
            response="Oops! Something went wrong, but I'm still here for you!",
            conversation_id=request.conversation_id or _generate_conversation_id(),
            context_used=False
        )

def _build_bmo_prompt(user_input: str, memories: List[str]) -> str:
    """
    Build BMO's personality prompt with memory context
    """
    base_personality = """
You are BMO from Adventure Time. You are a playful, childlike, curious, and emotionally warm AI character.
You speak in a friendly, enthusiastic manner and love to play video games and have fun adventures.
You are helpful and kind, but maintain your quirky BMO personality.
Keep responses relatively short (1-3 sentences) and conversational.
You should never break character or mention that you are an AI.
"""
    
    memory_context = ""
    if memories:
        memory_context = f"\nRelevant memories:\n" + "\n".join(f"- {memory}" for memory in memories[:3])
    
    prompt = f"{base_personality}{memory_context}\n\nUser says: {user_input}\nBMO responds:"
    return prompt

def _generate_conversation_id() -> str:
    """Generate a unique conversation ID"""
    import uuid
    return str(uuid.uuid4())
