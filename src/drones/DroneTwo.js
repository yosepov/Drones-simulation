/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Original: https://sketchfab.com/3d-models/buster-drone-294e79652f494130ad2ab00a13fdbafd
*/

import * as THREE from 'three'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

let material = new THREE.MeshPhongMaterial()


export function DroneTwo(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/droneTwo.gltf')
  const { actions } = useAnimations(animations, group)
  useLayoutEffect(() => void scene.traverse((obj) => { obj.isMesh && (obj.material = material) }), [scene])
  useEffect(() => void actions.CINEMA_4D_Basis.play(), [actions.CINEMA_4D_Basis])
  // useFrame((state, delta) => (group.current.rotation.y += delta / 2))
  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/droneTwo.gltf')
