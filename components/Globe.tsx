import { useRef } from 'react'
import { useLoader,useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import vertexShader from '@/shaders/vertex.glsl'
import fragmentShader from '@/shaders/fragment.glsl'
import atmosphereVertexShader from '@/shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '@/shaders/atmosphereFragment.glsl'

export default function Globe() {
    const texture = useLoader(THREE.TextureLoader, './img/globe.jpg')
    const globeRef = useRef()
    const groupRef = useRef()
    const mouse = {x:0,y:0}

    useFrame((_, delta) => {
        globeRef.current.rotation.y += 0.1 * delta
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y, 0.025)
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x, 0.025)
    })
    
    return (
        <group
            ref={groupRef}
            onPointerMove={(e) => {
            mouse.x = (e.clientX / innerWidth) * 2 - 1
            mouse.y = (e.clientY / innerHeight) * 2 - 1
            console.log(mouse)
        }}>
            <mesh scale={1.0} ref={globeRef}> 
                <sphereGeometry args={[5, 50, 50]} />
                <shaderMaterial 
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={{
                        globeTexture: {value: texture}
                    }}
                />
            </mesh>  
            
            <mesh scale={1.225}> 
                <sphereGeometry args={[5, 50, 50]} />
                <shaderMaterial 
                    vertexShader={atmosphereVertexShader}
                    fragmentShader={atmosphereFragmentShader}
                    blending={THREE.AdditiveBlending}
                    side={THREE.BackSide}
                />  
            </mesh>       
        </group>
    )
}