import os
import logging
try:
    from openai import OpenAI
    OPENAI_AVAILABLE = True
except ImportError:
    OPENAI_AVAILABLE = False
    logging.warning("OpenAI not available, LLM functionality disabled")

from typing import Optional

logger = logging.getLogger(__name__)

class OpenAIProvider:
    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY")
        if not self.api_key:
            logger.warning("OPENAI_API_KEY not found in environment variables")
            self.client = None
        elif OPENAI_AVAILABLE:
            self.client = OpenAI(api_key=self.api_key)
        else:
            self.client = None
    
    async def generate_response(self, prompt: str, model: str = "gpt-3.5-turbo") -> str:
        """
        Generate a response using OpenAI's API
        """
        try:
            if not self.client:
                raise ValueError("OpenAI client not available - check API key and installation")
            
            response = self.client.chat.completions.create(
                model=model,
                messages=[
                    {"role": "system", "content": "You are BMO from Adventure Time."},
                    {"role": "user", "content": prompt}
                ],
                max_tokens=150,
                temperature=0.8,
                top_p=0.9,
                frequency_penalty=0.5,
                presence_penalty=0.6
            )
            
            return response.choices[0].message.content.strip()
            
        except Exception as e:
            logger.error(f"OpenAI API error: {str(e)}")
            raise Exception(f"OpenAI API error: {str(e)}")
    
    async def is_available(self) -> bool:
        """
        Check if OpenAI API is available
        """
        try:
            if not self.client or not self.api_key:
                return False
            
            # Simple API call to test availability
            self.client.models.list()
            return True
            
        except Exception as e:
            logger.error(f"OpenAI availability check failed: {str(e)}")
            return False
