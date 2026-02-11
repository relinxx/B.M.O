import { create } from 'zustand'

export const useBMOState = create((set, get) => ({
  state: 'IDLE',
  setState: (newState) => set({ state: newState }),
  
  // Convenience methods for state transitions
  setIdle: () => set({ state: 'IDLE' }),
  setListening: () => set({ state: 'LISTENING' }),
  setThinking: () => set({ state: 'THINKING' }),
  setTalking: () => set({ state: 'TALKING' }),
  
  // Get current state
  getCurrentState: () => get().state,
  
  // Check if currently in a specific state
  isState: (checkState) => get().state === checkState,
}))
