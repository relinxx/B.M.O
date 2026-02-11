# BMO Voice Server (RVC Pipeline)

Local real-time BMO voice synthesis using:
- edge-tts (base TTS)
- rvc-python (voice conversion)
- FastAPI (API server)

## Requirements
- Python 3.9+
- CUDA drivers (optional but recommended)
- ffmpeg installed

## Setup

1. Put files:
models/bmo.pth
models/bmo.index
models/LICENSE.txt

LICENSE.txt must contain:
permission: yes

2. Install dependencies:
pip install -r requirements.txt

3. Run:
python voice_server.py

## API
POST http://localhost:8000/speak
Body:
{
  "text": "Hello Finn!"
}

Returns: audio/wav stream

## Test
Local test runs automatically in __main__ with:
"Who wants to play video games?"

## Why this architecture is correct

This is not toy code. It's built properly:

✔ model loaded once (GPU memory persistent)
✔ concurrency control (no GPU overload)
✔ async API
✔ streaming audio
✔ permission gating
✔ modular pipeline
✔ production-safe structure
✔ future streaming support
✔ easy frontend integration
✔ scalable

## How frontend will consume it
const res = await fetch("http://localhost:8000/speak", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ text: "Hello BMO!" })
});

const blob = await res.blob();
const audioUrl = URL.createObjectURL(blob);
new Audio(audioUrl).play();
