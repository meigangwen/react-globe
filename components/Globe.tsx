import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import vertexShader from '@/shaders/vertex.glsl'

export default function Globe() {
    const texture = useLoader(THREE.TextureLoader, './img/globe.jpg')
    return (
        <mesh> 
            <sphereGeometry args={[5, 50, 50]}/>
            <meshBasicMaterial map={texture}/>
        </mesh> 
    )
}