import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import vertexShader from '@/shaders/vertex.glsl'
import fragmentShader from '@/shaders/fragment.glsl'
import atmosphereVertexShader from '@/shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '@/shaders/atmosphereFragment.glsl'

console.log(fragmentShader)

export default function Globe() {
    const texture = useLoader(THREE.TextureLoader, './img/globe.jpg')
    return (
        <>
            <mesh> 
                <sphereGeometry args={[5, 50, 50]} />
                <shaderMaterial 
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={{
                        globeTexture: {value: texture}
                    }}
                />
            </mesh>
            
            <mesh scale={1.1}> 
            <sphereGeometry args={[5, 50, 50]} />
            <shaderMaterial 
                vertexShader={atmosphereVertexShader}
                fragmentShader={atmosphereFragmentShader}
                //blending={THREE.AdditiveBlending}
                //side={THREE.BackSide}
            />
            </mesh>  
        </>
    )
}