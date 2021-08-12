
import * as THREE from 'three'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSelector, useDispatch, connect } from 'react-redux'


import terrains from '../terrains/terrains.json'
import { destination, origin, position, current, height } from '../Redux/Slices/DronesSlice'
import { checkForAvailableHeight } from '../Redux/Slices/HeightSlice'


let material = new THREE.MeshPhongMaterial()


export const DroneOne = (props) => {
  // const [height, setHeight] = useState(0)

  const dispatch = useDispatch()
  dispatch(position([0, terrains[0].position]))
  dispatch(checkForAvailableHeight(0))

  const group = useRef()
  const { scene, animations } = useGLTF('/drone.gltf')
  const { actions } = useAnimations(animations, group)
  useLayoutEffect(() => void scene.traverse((obj) => { obj.isMesh && (obj.material = material) }), [scene])
  useEffect(() => void actions.CINEMA_4D_Basis.play(), [actions.CINEMA_4D_Basis])
  // useEffect(() => void scene.traverse((obj) => { obj.isMesh && (obj.position.y += 0.01) }), [scene])
  // setHeight()
  let height = useSelector((state) => state.drones.dronesData[0].height)
  useFrame((state, delta,) => {
    if (state.drones.dronesData[0].height !== 0) {
      props.dispatch(position(group.current.translateZ(0.01)))
    }

  })
  // useFrame((state, delta) => (group.current.rotation.y += delta / 2))


  const takeOff = () => {

  }



  return (
    <group ref={group} rotation={[0, 0, 0]} position={useSelector((state) => state.drones.dronesData[0].position.current)} scale={[0.01, 0.01, 0.01]}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/drone.gltf')
// const mapStateToProps = (state) => state.drones.dronesData[0].position.current[1]
export default connect()(DroneOne) // Component will receive `dispatch` (just like our <TodoList />!)
