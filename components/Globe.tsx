import { useRef,useEffect } from 'react'
import { useLoader,useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'

import vertexShader from '@/shaders/vertex.glsl'
import fragmentShader from '@/shaders/fragment.glsl'
import atmosphereVertexShader from '@/shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from '@/shaders/atmosphereFragment.glsl'

import Point from '@/components/Point'
import countries from '@/app/countries.json'

export default function Globe(props) {
    const texture = useLoader(THREE.TextureLoader, './img/globe.jpg')
    const globeRef = useRef()
    const groupRef = useRef()
    let mouse = {x:0,y:0}
    const popUpEl = document.querySelector('#popUpEl')
    const populationEl = document.querySelector('#populationEl')
    const populationValueEl = document.querySelector('#populationValueEl')

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

    useEffect(() => {
        console.log(props.mousex, props.mousey)
    },[props])
    
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
                
                { //render all countries as points
                    countries.map((country,index) => (
                            <Point
                                key = {index}
                                radius = {5}
                                lat = {country.latlng[0]}
                                lon = {country.latlng[1]}
                                country = {country.name.common}
                                population = {country.population}
                                popUpEl = {popUpEl}
                                populationEl = {populationEl}
                                populationValueEl = {populationValueEl}
                            />
                    ))}
            </group>
        </group>
    )
}