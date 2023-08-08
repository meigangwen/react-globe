'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import Globe from '@/components/Globe'
import Stars from '@/components/Stars'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 12] }}>
        <Globe />
        <Stars />
    </Canvas>
  )
}