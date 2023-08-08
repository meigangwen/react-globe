import { useRef,useEffect,useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function Point(props){
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        ref.current.lookAt(0,0,0)
        ref.current.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0,0,-0.4))
        gsap.to(ref.current.scale,{
            z: 0.4,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: 'linear',
            delay: Math.random()
        })
    }, []) //calling useEffect with an empty dependency array

    const lat = (props.lat / 180) * Math.PI
    const lon = (props.lon / 180) * Math.PI
    const radius = props.radius
    const x = radius * Math.cos(lat) * Math.sin(lon)
    const y = radius * Math.sin(lat)
    const z = radius * Math.cos(lat) * Math.cos(lon)
   
    return (
        <mesh 
            position={[x, y, z]}
            ref = {ref}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)} 
        >
            <boxGeometry args={[0.1, 0.1, 0.8]} />
            <meshBasicMaterial 
                color='#3BF7FF'
                opacity={hovered? 1.0 : 0.4}
                transparent={true}
            />
        </mesh>
    )
}