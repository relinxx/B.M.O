import os
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import logging

from api.think import router as think_router
from api.speak import router as speak_router

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create FastAPI app
app = FastAPI(
    title="BMO Backend API (Simple)",
    description="Backend API for BMO interactive AI character",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(think_router, prefix="/api", tags=["thinking"])
app.include_router(speak_router, prefix="/api", tags=["speaking"])

@app.get("/")
async def root():
    return {"message": "BMO Backend API (Simple) is running", "status": "healthy"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "bmo-backend-simple"}

if __name__ == "__main__":
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", 8001))
    debug = os.getenv("DEBUG", "false").lower() == "true"
    
    logger.info(f"Starting BMO Backend API on {host}:{port}")
    uvicorn.run(
        "simple_main:app",
        host=host,
        port=port,
        reload=debug,
        log_level="info"
    )
