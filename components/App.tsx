'use client'

import { Canvas S} from '@react-three/fiber'
import Globe from '@/components/Globe'
import Stars from '@/components/Stars'

export default function App() {
  let mouse = {x:0,y:0}
  return (
      <Canvas 
        camera = {{ position: [0, 0, 12] }}
        onPointerDown = {(e) => {
          mouse.x = ((e.clientX - innerWidth / 2) / (innerWidth / 2)) * 2 - 1
          mouse.y = - (e.clientY / innerHeight) * 2 + 1
        }}
      >
          <Globe
             mousex = {mouse.x}
             mousey = {mouse.y}
          />
          <Stars />
      </Canvas>
  )
}