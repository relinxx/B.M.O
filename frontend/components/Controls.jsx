import React, { useState, useRef } from 'react'
import { useBMOState } from '../state/bmoState'
import { api, APIError } from '../utils/api'
import { useDebounce } from '../hooks/useDebounce'

export function Controls() {
  const [isRecording, setIsRecording] = useState(false)
  const [textInput, setTextInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [lastResponse, setLastResponse] = useState('')
  
  const debouncedTextInput = useDebounce(textInput, 500)
  
  const {
    setListening,
    setThinking,
    setTalking,
    setIdle,
    isState
  } = useBMOState()

  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
        await processAudio(audioBlob)
        stream.getTracks().forEach(track => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
      setListening()
    } catch (error) {
      console.error('Error accessing microphone:', error)
      alert('Please allow microphone access to use voice input')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      setThinking()
    }
  }

  const processAudio = async (audioBlob) => {
    setError('')
    try {
      // Send to backend for STT processing
      const sttResult = await api.speechToText(audioBlob)
      const transcribedText = sttResult.text
      
      if (!transcribedText) {
        setIdle()
        return
      }
      
      console.log('Transcribed text:', transcribedText)
      
      // Send to LLM for response
      const thinkResult = await api.think(transcribedText)
      const responseText = thinkResult.response
      
      // Speak the response
      await speakResponse(responseText)
      
    } catch (error) {
      console.error('Error processing audio:', error)
      setError(error.message || 'Failed to process audio')
      setIdle()
    }
  }

  const speakResponse = async (text) => {
    setError('')
    try {
      // Call backend TTS endpoint
      const audioBlob = await api.speak(text)
      
      // Check if we got a valid audio blob
      if (audioBlob.size === 0) {
        setError('Voice server unavailable - text response only')
        setLastResponse(text)
        // Show thinking state for 2 seconds then go to idle
        setThinking()
        setTimeout(() => {
          setIdle()
          setLastResponse('') // Clear response after showing it
        }, 2000)
        return
      }
      
      setTalking()
      
      // Create audio from response blob
      const audioUrl = URL.createObjectURL(audioBlob)
      const audio = new Audio(audioUrl)
      
      audio.onended = () => {
        URL.revokeObjectURL(audioUrl)
        setIdle()
      }
      
      audio.onerror = () => {
        URL.revokeObjectURL(audioUrl)
        setError('Audio playback failed')
        setIdle()
      }
      
      await audio.play()
      
    } catch (error) {
      console.error('Error playing audio:', error)
      setError(error.message || 'Failed to generate speech')
      setIdle()
    }
  }

  const handleTextSubmit = async (e) => {
    e.preventDefault()
    if (!textInput.trim()) return
    
    setError('')
    setIsLoading(true)
    setThinking()
    
    try {
      // Send text to backend for processing
      const thinkResult = await api.think(textInput)
      const responseText = thinkResult.response
      
      // Speak the response
      await speakResponse(responseText)
      setTextInput('')
      setIsLoading(false)
      
    } catch (error) {
      console.error('Error processing text:', error)
      setError(error.message || 'Failed to process text')
      setIdle()
      setIsLoading(false)
    }
  }

  return (
    <div style={{
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px'
    }}>
      {/* Voice Input Button */}
      <button
        onClick={isRecording ? stopRecording : startRecording}
        disabled={isLoading}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: isRecording ? '#ef4444' : isLoading ? '#6b7280' : '#10b981',
          color: 'white',
          fontSize: '24px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}
      >
        {isRecording ? '🛑' : '🎤'}
      </button>

      {/* Text Input */}
      <form onSubmit={handleTextSubmit} style={{
        display: 'flex',
        gap: '10px',
        background: 'rgba(255,255,255,0.9)',
        padding: '10px',
        borderRadius: '25px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
      }}>
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Type a message to BMO..."
          disabled={isLoading}
          style={{
            border: 'none',
            outline: 'none',
            padding: '8px 15px',
            borderRadius: '20px',
            fontSize: '14px',
            width: '250px',
            background: 'transparent'
          }}
        />
        <button
          type="submit"
          disabled={isLoading || !textInput.trim()}
          style={{
            border: 'none',
            backgroundColor: isLoading || !textInput.trim() ? '#6b7280' : '#3b82f6',
            color: 'white',
            padding: '8px 15px',
            borderRadius: '20px',
            cursor: isLoading || !textInput.trim() ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          Send
        </button>
      </form>

      {/* Response Display */}
      {lastResponse && (
        <div style={{
          fontSize: '14px',
          color: 'white',
          background: 'rgba(0,0,0,0.8)',
          padding: '10px 15px',
          borderRadius: '15px',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          fontStyle: 'italic'
        }}>
          BMO: "{lastResponse}"
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div style={{
          fontSize: '12px',
          color: '#ef4444',
          background: 'rgba(255,255,255,0.9)',
          padding: '8px 12px',
          borderRadius: '15px',
          maxWidth: '300px',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
          {error}
        </div>
      )}

      {/* Status Indicator */}
      <div style={{
        fontSize: '12px',
        color: 'white',
        background: 'rgba(0,0,0,0.7)',
        padding: '5px 10px',
        borderRadius: '15px',
        textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
      }}>
        {isRecording ? '🎙️ Listening...' : isLoading ? '🤔 Thinking...' : '💬 Ready'}
      </div>
    </div>
  )
}
