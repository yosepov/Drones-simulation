import React from 'react'

import { DroneOne } from './DroneOne'
import { DroneTwo } from './DroneTwo'
import { DroneThree } from './DroneThree'

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
import { Provider } from 'react-redux'

import store from '../Redux/store'
export const Drones = (props) => {

  return (
    <>
      <Provider store={store}>
        <DroneOne />
        <DroneTwo rotation={[0, 0, 0]} position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />
        <DroneThree rotation={[0, 0, 0]} position={[3, 0, 5]} scale={[0.01, 0.01, 0.01]} />
      </Provider>
    </>
  )
}