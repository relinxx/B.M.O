import React from 'react'
import { useTexture } from '@react-three/drei'
import { useBMOState } from '../state/bmoState'

export function FacePlane(props) {
  const state = useBMOState((state) => state.state)
  
  const textures = {
    IDLE: useTexture('/textures/bmo_idle.png'),
    LISTENING: useTexture('/textures/bmo_listening.png'),
    THINKING: useTexture('/textures/bmo_thinking.png'),
    TALKING: useTexture('/textures/bmo_talking.png'),
  }

  return (
    <mesh {...props}>
      <planeGeometry args={[0.6, 0.6]} />
      <meshBasicMaterial 
        map={textures[state]} 
        transparent 
        toneMapped={false}
      />
    </mesh>
  )
}
