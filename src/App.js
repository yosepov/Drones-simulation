import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import {
  Canvas, useFrame, useThree, extend,
} from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useControls } from 'leva'
import { City } from './City'
import Terrain from './Terrain'
import { Terrains } from './terrains/Terrains'
import { Drones } from './drones/Drones'
import terrains from './terrains/terrains.json'
import { useSelector, useDispatch } from 'react-redux'

import { destination, origin, position, current, height } from './Redux/Slices/DronesSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneTwoSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneThreeSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneFourSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneFiveSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneSixSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneSevenSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneEightSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneNineSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneTenSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneElevenSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneTwelveSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneThirteenSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneFourteenSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneFifteenSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneSixteenSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneSeventeenSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneEighteenSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneNineteenSlice'
// import { destination, origin, position, current, height } from './Redux/Slices/DroneTwentySlice'

import { checkForAvailableHeight } from './Redux/Slices/HeightSlice'

extend({ OrbitControls });


const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

export default function App() {

  // const props = useControls({
  //   intensity: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ambient: { value: 0.5, min: 0, max: 1, step: 0.1 },
  //   radius: { value: 25, min: 0, max: 100, step: 1 },
  //   blend: { value: 40, min: 1, max: 200, step: 1 },
  // })
  return (
    <Canvas shadows dpr={[1, 1.5]} gl={{ alpha: true }} onCreated={({ camera, gl, scene }) => {
      camera.lookAt(new THREE.Vector3(0, 0, 0))
    }}>
      <CameraControls />
      <color attach="background" args={['#d0d0d0']} />
      <Suspense fallback={null}>
        <directionalLight intensity={1} />
        <ambientLight intensity={0.1} />
        <Terrain position={[0, -1, 0]} color={"#808080"} args={[5000, 5000, 128, 128]} />
        <Terrains />
        <Drones />
        <City rotation={[0, 0, 0]} position={[0, -1.3, 0]} scale={[0.01, 0.01, 0.01]} />
        {/* </Lightmap> */}
      </Suspense>
    </Canvas >
  )
}
