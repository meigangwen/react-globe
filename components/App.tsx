'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import Globe from '@/components/Globe'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
        <Globe />
    </Canvas>
  )
}