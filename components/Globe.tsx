import { useRef } from 'react'
import { useLoader,useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'

import vertexShader from '@/shaders/vertex.glsl'
import fragmentShader from '@/shaders/fragment.glsl'
import atmosphereVertexShader from '@/shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '@/shaders/atmosphereFragment.glsl'

import Point from '@/components/Point'

export default function Globe() {
    const texture = useLoader(THREE.TextureLoader, './img/globe.jpg')
    const globeRef = useRef()
    const groupRef = useRef()
    const mouse = {x:0,y:0}
    const popUpEl = document.querySelector('#popUpEl')
    //console.log(popUpEl)

    useFrame((_, delta) => {
        globeRef.current.rotation.y += 0.1 * delta

        //using the lerp method
        //groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y, 0.025)
        //groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x, 0.025)
        
        /*
        gsap.to(groupRef.current.rotation, {
            x: mouse.y * 1.8,
            y: mouse.x * 1.8,
            duration: 2
        })
        */
    })
    
    return (
        <group
            ref={groupRef}
            onPointerMove={(e) => {
            mouse.x = ((e.clientX - innerWidth / 2) / (innerWidth / 2)) * 2 - 1
            mouse.y = - (e.clientY / innerHeight) * 2 + 1
            gsap.set(popUpEl, {
                x: e.clientX,
                y: e.clientY
            })
        }}>

            <mesh scale={1.225}> 
                <sphereGeometry args={[5, 50, 50]} />
                <shaderMaterial 
                    vertexShader={atmosphereVertexShader}
                    fragmentShader={atmosphereFragmentShader}
                    blending={THREE.AdditiveBlending}
                    side={THREE.BackSide}
                />  
            </mesh>

            <group ref={globeRef}>
                <mesh rotation={[0, -Math.PI/2, 0]}> 
                    <sphereGeometry args={[5, 50, 50]} />
                    <shaderMaterial 
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                        uniforms={{
                            globeTexture: {value: texture}
                        }}
                    />
                </mesh>  
                
                <Point
                    radius = {5}
                    lat = {23.6345}
                    lon = {-102.5528}
                    country = 'Mexico' 
                />
                <Point
                    radius = {5}
                    lat = {-14.235}
                    lon = {-51.9253}
                    country = 'Brazil' 
                />
                <Point
                    radius = {5}
                    lat = {20.5937}
                    lon = {78.9629}
                    country = 'India' 
                />
                <Point
                    radius = {5}
                    lat = {35.8617}
                    lon = {104.1954}
                    country = 'China' 
                />
                <Point
                    radius = {5}
                    lat = {37.092}
                    lon = {-95.7129}
                    country = 'USA' 
                />
            </group>
        </group>
    )
}