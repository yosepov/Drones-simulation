
import * as THREE from 'three'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSelector, useDispatch, connect } from 'react-redux'


import terrains from '../terrains/terrains.json'
import { destination, origin, position, current, getHeight, checkForAvailableHeight } from '../Redux/Slices/DronesSlice'


let material = new THREE.MeshPhongMaterial()


export const DroneOne = (props) => {
  const [status, setStatus] = useState('NOT_STARTED')

  const dispatch = useDispatch()
  dispatch(position([0, terrains[0].position]))
  dispatch(destination([0, terrains[5].position]))

  dispatch(checkForAvailableHeight(0))

  const group = useRef()
  const { scene, animations } = useGLTF('/drone.gltf')
  const { actions } = useAnimations(animations, group)
  useLayoutEffect(() => void scene.traverse((obj) => { obj.isMesh && (obj.material = material) }), [scene])
  useEffect(() => void actions.CINEMA_4D_Basis.play(), [actions.CINEMA_4D_Basis])

  // useEffect(() => void scene.traverse((obj) => { obj.isMesh && (obj.position.y += 0.01) }), [scene])
  // setHeight()
  let heights = useSelector((state) => state.drones.heights)
  let droneDestination = useSelector((state) => state.drones.dronesData[0].position.destination)
  let dronehight;
  heights.map(item => {
    if (item.drone === 0) {
      dronehight = item.height
    }
  })

  useFrame((state, delta,) => {

    // console.log(droneDestination)
    if (dronehight !== 0 && status === 'NOT_STARTED') {
      setStatus('TAKE_OFF')
    }


    if (status === 'TAKE_OFF' && group.current.position.y <= dronehight) {
      group.current.translateY(0.1)
    }




    if (dronehight !== 0 && group.current.position.y >= dronehight) {
      setStatus('TO_DESTINATION')
    }


    if (status === 'TO_DESTINATION') {
      if (group.current.position.x !== droneDestination[0]) {
        if (group.current.position.x > droneDestination[0])
          group.current.translateX(-0.1)
        if (group.current.position.x < droneDestination[0]) {
          group.current.translateX(0.1)
        }
      }
      if (group.current.position.z !== droneDestination[2]) {
        if (group.current.position.z > droneDestination[2])
          group.current.translateZ(-0.1)
        if (group.current.position.z < droneDestination[2]) {
          group.current.translateZ(0.1)
        }
      }
    }

    if (group.current.position.z > droneDestination[2] && group.current.position.x > droneDestination[0]) {
      setStatus('LANDING')
    }

    if (status === 'LANDING') {
      if (status === 'LANDING' && group.current.position.y > droneDestination[1] + 1) {
        group.current.translateY(-0.1)
      } else {
        setStatus('NOT_STARTED')
      }
    }
  })


  // })
  // useFrame((state, delta) => (group.current.rotation.y += delta / 2))





  return (
    <group ref={group} rotation={[0, 0, 0]} position={useSelector((state) => state.drones.dronesData[0].position.current)} scale={[0.01, 0.01, 0.01]}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/drone.gltf')

// const mapStateToProps = (state) => state.drones.dronesData[0].position.current[1]
export default connect()(DroneOne) // Component will receive `dispatch` (just like our <TodoList />!)
