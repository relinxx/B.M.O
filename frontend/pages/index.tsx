import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { BMOModel } from '../components/BMOModel'
import { Controls } from '../components/Controls'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { useBMOState } from '../state/bmoState'

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.5, 4]} fov={45} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />
      
      <Suspense fallback={null}>
        <BMOModel position={[0, 0, 0]} scale={1} />
      </Suspense>
      
      <OrbitControls 
        enablePan={false}
        minDistance={2}
        maxDistance={8}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.5}
      />
    </>
  )
}

export default function Home() {
  const currentState = useBMOState((state) => state.state)

  return (
    <ErrorBoundary>
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <Canvas shadows>
          <Scene />
        </Canvas>
        
        {/* UI Overlay */}
        <div style={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'white',
          fontSize: '14px',
          fontFamily: 'monospace',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          background: 'rgba(0,0,0,0.5)',
          padding: '10px',
          borderRadius: '8px'
        }}>
          <div>BMO State: {currentState}</div>
        </div>
        
        <ErrorBoundary>
          <Controls />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  )
}
