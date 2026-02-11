# B.M.O - Interactive 3D AI Character

A fully interactive BMO character from Adventure Time with 3D visualization, voice cloning, and AI conversation capabilities.

## 🎯 Features

- **3D Interactive BMO**: React Three Fiber powered 3D model with dynamic face expressions
- **Voice Cloning**: Real-time BMO voice using RVC (Retrieval-based Voice Conversion)
- **AI Conversation**: OpenAI-powered responses with BMO's personality
- **Memory System**: ChromaDB vector memory for contextual conversations
- **Speech-to-Text**: Whisper-based voice input processing
- **State Machine**: Dynamic face textures (IDLE, LISTENING, THINKING, TALKING)

## 🏗️ Project Structure

```
bmo-project/
├── frontend/                 # Next.js + React Three Fiber
│   ├── components/
│   │   ├── BMOModel.jsx     # 3D BMO model component
│   │   ├── FacePlane.jsx    # Dynamic face texture overlay
│   │   ├── Controls.jsx     # Voice & text input controls
│   │   └── ErrorBoundary.jsx # Error handling
│   ├── state/
│   │   └── bmoState.js      # Zustand state management
│   ├── hooks/
│   │   └── useDebounce.js   # Utility hooks
│   ├── utils/
│   │   └── api.js           # API client with error handling
│   └── public/
│       ├── gltf/            # BMO 3D model files
│       └── textures/        # Face expression textures
├── backend/                 # FastAPI + AI services
│   ├── api/
│   │   ├── think.py         # LLM processing endpoint
│   │   ├── speak.py         # TTS voice synthesis
│   │   └── stt.py           # Speech-to-text processing
│   ├── llm_providers/
│   │   └── openai_provider.py # OpenAI integration
│   ├── memory/
│   │   └── memory_manager.py # ChromaDB memory system
│   └── main.py              # FastAPI server
├── bmo-voice/               # RVC Voice Server
│   ├── voice_server.py      # Edge-TTS + RVC pipeline
│   ├── requirements.txt     # Python dependencies
│   └── models/              # RVC model files (user-provided)
│       ├── bmo.pth          # RVC model
│       ├── bmo.index        # Index file
│       └── LICENSE.txt      # Permission file
└── assets/
    └── gltf/                # Additional 3D assets
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Python 3.10+
- CUDA (optional, for GPU acceleration)
- OpenAI API key

### 1. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at `http://localhost:3000`

### 2. Setup Backend

```bash
cd backend
pip install -r requirements.txt

# Create environment file
cp .env.example .env
# Add your OpenAI API key to .env

python main.py
```

Backend API will be available at `http://localhost:8001`

### 3. Setup Voice Server

```bash
cd bmo-voice
pip install -r requirements.txt

# Add your RVC model files to models/ directory:
# - bmo.pth (RVC model)
# - bmo.index (index file)
# - LICENSE.txt (must contain "permission: yes")

python voice_server.py
```

Voice server will be available at `http://localhost:8000`

## 🎮 Usage

1. **Voice Input**: Click the microphone button to speak to BMO
2. **Text Input**: Type messages in the text input field
3. **3D Interaction**: Use mouse to rotate and zoom the 3D model
4. **State Feedback**: Watch BMO's face change based on conversation state

## 🔧 Configuration

### Frontend Configuration

- **API URLs**: Configure in `frontend/utils/api.js`
- **3D Model**: Replace files in `frontend/public/gltf/`
- **Face Textures**: Update PNG files in `frontend/public/textures/`

### Backend Configuration

- **OpenAI API**: Set `OPENAI_API_KEY` in `.env`
- **Memory Settings**: Configure ChromaDB settings in `.env`
- **Voice Server**: Update `VOICE_SERVER_URL` in `.env`

### Voice Server Configuration

- **RVC Model**: Place trained model files in `models/` directory
- **Voice Settings**: Adjust pitch, rate, and F0 parameters in `voice_server.py`
- **Audio Quality**: Configure sample rates and formats

## 🧠 AI Features

### BMO Personality

- Playful and childlike demeanor
- Curious and emotionally warm responses
- Adventure Time character consistency
- Non-toxic and family-friendly interactions

### Memory System

- **Short-term**: Current conversation context
- **Long-term**: Vector-based semantic memory
- **Contextual**: Relevant memory retrieval for responses

### Voice Cloning

- **Base TTS**: Microsoft Edge TTS (en-US-AnaNeural)
- **Voice Conversion**: RVC for BMO's voice
- **Real-time**: Optimized for conversation flow

## 🛠️ Development

### Adding New Face States

1. Create new texture in `frontend/public/textures/`
2. Update `frontend/components/FacePlane.jsx`
3. Add state to `frontend/state/bmoState.js`

### Extending AI Personality

1. Modify prompts in `backend/api/think.py`
2. Update memory retrieval in `backend/memory/memory_manager.py`
3. Adjust response parameters in `backend/llm_providers/openai_provider.py`

### Voice Model Training

1. Prepare voice dataset (WAV, 48kHz, clean)
2. Train RVC model using provided scripts
3. Update model files in `bmo-voice/models/`

## 🔒 Safety & Legal

- **Voice Cloning**: Requires explicit permission in `LICENSE.txt`
- **API Keys**: Never commit API keys to version control
- **Content Filtering**: Built-in safety measures for appropriate responses
- **Data Privacy**: Local processing with optional cloud components

## 📝 API Documentation

### Backend Endpoints

- `POST /api/think` - Process text and generate AI response
- `POST /api/speak` - Convert text to BMO's voice
- `POST /api/stt` - Convert speech to text
- `GET /health` - Health check endpoint

### Voice Server Endpoints

- `POST /speak` - Generate BMO voice audio
- `GET /health` - Voice server health check

## 🐛 Troubleshooting

### Common Issues

1. **Voice Server Not Responding**: Check RVC model files and CUDA availability
2. **STT Not Working**: Verify microphone permissions and audio format
3. **Memory Issues**: Check ChromaDB permissions and disk space
4. **3D Model Not Loading**: Verify GLTF files and paths

### Debug Mode

Enable debug logging by setting `DEBUG=true` in backend `.env` file.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is for educational and personal use. Voice cloning requires explicit permission from voice owners.

## 🙏 Acknowledgments

- Adventure Time BMO character design
- React Three Fiber community
- OpenAI for AI capabilities
- RVC project for voice cloning
- ChromaDB for vector memory
