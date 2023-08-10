import { useRef,useEffect,useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function Point(props){
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const popUpEl = props.popUpEl
    const populationEl = props.populationEl
    const populationValueEl = props.populationValueEl

    const lat = (props.lat / 180) * Math.PI
    const lon = (props.lon / 180) * Math.PI
    const radius = props.radius
    const x = radius * Math.cos(lat) * Math.sin(lon)
    const y = radius * Math.sin(lat)
    const z = radius * Math.cos(lat) * Math.cos(lon)

    const scale = (props.population / 1000000000) * 0.8
    
    useEffect(() => {
        ref.current.lookAt(0,0,0)
        ref.current.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0,0,-0.4))
        /*
        gsap.to(ref.current.scale,{
            z: 0.4,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: 'linear',
            delay: Math.random()
        })
        */
    }, []) //calling useEffect with an empty dependency array
   
    return (
        <mesh 
            position={[x, y, z]}
            ref = {ref}
            onPointerOver={(e) => { 
                setHovered(true)
                // set information for the popup window
                populationEl.innerHTML = props.country
                populationValueEl.innerHTML = props.population
                // show the popup window
                gsap.set(popUpEl, {
                    display: 'block'
                })
            }}
            onPointerOut={(e) => {
                setHovered(false)
                // hide the popup window
                gsap.set(popUpEl, {
                    display: 'none'
                })
            }} 
        >
            <boxGeometry args={[0.1, 0.1, scale]} />
            <meshBasicMaterial 
                color='#3BF7FF'
                opacity={hovered? 1.0 : 0.4}
                transparent={true}
            />
        </mesh>
    )
}