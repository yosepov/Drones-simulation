import { configureStore } from '@reduxjs/toolkit'
import dronesReducer from './Slices/DronesSlice'
import heightsReducer from './Slices/HeightSlice'


export default configureStore({
  reducer: {
    drones: dronesReducer,
    heights: heightsReducer
  },
})