// API utility functions for BMO backend communication

const API_BASE_URL = 'http://localhost:8001/api'
const VOICE_SERVER_URL = 'http://localhost:8000'

// Request timeout configuration
const DEFAULT_TIMEOUT = 30000 // 30 seconds
const VOICE_TIMEOUT = 60000 // 60 seconds for voice generation

class APIError extends Error {
  constructor(message, status, data) {
    super(message)
    this.name = 'APIError'
    this.status = status
    this.data = data
  }
}

async function fetchWithTimeout(url, options = {}, timeout = DEFAULT_TIMEOUT) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    })
    clearTimeout(timeoutId)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new APIError(
        errorData.detail || `HTTP ${response.status}`,
        response.status,
        errorData
      )
    }

    return response
  } catch (error) {
    clearTimeout(timeoutId)
    if (error.name === 'AbortError') {
      throw new APIError('Request timeout', 408)
    }
    throw error
  }
}

export const api = {
  // Speech-to-Text
  async speechToText(audioBlob) {
    const formData = new FormData()
    formData.append('audio_file', audioBlob, 'recording.webm')

    const response = await fetchWithTimeout(`${API_BASE_URL}/stt`, {
      method: 'POST',
      body: formData
    })

    return response.json()
  },

  // Think/LLM
  async think(text, conversationId = null, context = null) {
    console.log('Think API called with:', { text, conversationId, context })
    try {
      const response = await fetchWithTimeout(`${API_BASE_URL}/think`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          conversation_id: conversationId,
          context
        })
      })

      console.log('Think API response status:', response.status)
      const result = await response.json()
      console.log('Think API result:', result)
      return result
    } catch (error) {
      console.error('Think API error:', error)
      console.error('Error details:', error.message, error.status)
      // Return a fallback response if the backend fails
      return {
        response: "I'm having trouble thinking right now! Can you try again?",
        conversation_id: conversationId || 'fallback',
        context_used: false
      }
    }
  },

  // Text-to-Speech
  async speak(text) {
    try {
      const response = await fetchWithTimeout(`${API_BASE_URL}/speak`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      }, VOICE_TIMEOUT)

      return response.blob()
    } catch (error) {
      console.error('Speak API error:', error)
      // Return empty blob if voice server fails
      return new Blob()
    }
  },

  // Health checks
  async checkBackendHealth() {
    try {
      const response = await fetchWithTimeout(`${API_BASE_URL.replace('/api', '')}/health`, {
        method: 'GET'
      })
      return response.json()
    } catch (error) {
      throw new APIError('Backend unavailable', 503)
    }
  },

  async checkVoiceServerHealth() {
    try {
      const response = await fetchWithTimeout(`${VOICE_SERVER_URL}/health`, {
        method: 'GET'
      })
      return response.json()
    } catch (error) {
      throw new APIError('Voice server unavailable', 503)
    }
  }
}

export { APIError }
