import { useRef,useEffect } from 'react'
import * as THREE from 'three'

export default function Point(props){
    const ref = useRef()
    useEffect(() => {
        ref.current.lookAt(0,0,0)
        ref.current.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0,0,-0.4))
    })

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
        >
            <boxGeometry args={[0.1, 0.1, 0.8]} />
            <meshBasicMaterial color='#ff0000'/>
        </mesh>
    )
}