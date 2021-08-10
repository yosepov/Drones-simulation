import React from 'react'

import { DroneOne } from './DroneOne'
import { DroneTwo } from './DroneTwo'
import { DroneThree } from './DroneThree'

export const Drones = () => {

  return (
    <>
      <DroneOne rotation={[0, 0, 0]} position={[0, 0, -5]} scale={[0.01, 0.01, 0.01]} />
      <DroneTwo rotation={[0, 0, 0]} position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />
      <DroneThree rotation={[0, 0, 0]} position={[3, 0, 5]} scale={[0.01, 0.01, 0.01]} />
    </>
  )
}