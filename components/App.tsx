'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import Globe from '@/components/Globe'
import Stars from '@/components/Stars'
import Popup from '@/components/Popup'

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 12] }}>
          <Globe />
          <Stars />
      </Canvas>
    </>
  )
}