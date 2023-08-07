import { useRef } from 'react'
import { useLoader,useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import vertexShader from '@/shaders/vertex.glsl'
import fragmentShader from '@/shaders/fragment.glsl'
import atmosphereVertexShader from '@/shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '@/shaders/atmosphereFragment.glsl'

export default function Globe() {
    const texture = useLoader(THREE.TextureLoader, './img/globe.jpg')
    const ref = useRef()

    useFrame((_, delta) => {
        ref.current.rotation.y += 0.05 * delta
    })
    
    return (
        <>
            <mesh scale={1.0} ref={ref}> 
                <sphereGeometry args={[5, 50, 50]} />
                <shaderMaterial 
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={{
                        globeTexture: {value: texture}
                    }}
                />
            </mesh>  
            
            <mesh scale={1.2}> 
                <sphereGeometry args={[5, 50, 50]} />
                <shaderMaterial 
                    vertexShader={atmosphereVertexShader}
                    fragmentShader={atmosphereFragmentShader}
                    blending={THREE.AdditiveBlending}
                    side={THREE.BackSide}
                />  
            </mesh>  
          
        </>
    )
}