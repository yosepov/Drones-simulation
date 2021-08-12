import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

import { destination, origin, position, current, getHeight } from './DronesSlice'

const AddHeight = (index, height) => {
  useDispatch(getHeight(index, height))
}
export const heightSlice = createSlice({
  name: 'height',
  initialState: {
    heights: [
      { height: 50, available: true, drone: -1 },
      { height: 55, available: true, drone: -1 },
      { height: 60, available: true, drone: -1 },
      { height: 65, available: true, drone: -1 },
      { height: 70, available: true, drone: -1 },
      { height: 75, available: true, drone: -1 },
      { height: 80, available: true, drone: -1 },
      { height: 85, available: true, drone: -1 },
      { height: 90, available: true, drone: -1 },
      { height: 95, available: true, drone: -1 },
      { height: 100, available: true, drone: -1 },
      { height: 105, available: true, drone: -1 },
      { height: 110, available: true, drone: -1 },
      { height: 115, available: true, drone: -1 },
      { height: 120, available: true, drone: -1 }],
  },
  reducers: {
    checkForAvailableHeight: (state, drone) => {
      let i = 0
      while (state.heights[i].drone === -1 || i === -1) {
        if (state.heights[i].drone === -1) {
          state.heights[i].drone = drone
          state.heights[i].available = false
          console.log("Drone: " + drone + " on height: " + state.heights[i].height)
          console.log("Height redux state: " + state.heights[i])
          AddHeight(drone, state.heights[i].height)
        } else if (i >= state.heights[i].length) {
          i = -1
        } else {
          i++
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { checkForAvailableHeight } = heightSlice.actions

export default heightSlice.reducer