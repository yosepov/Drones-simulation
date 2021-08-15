import { configureStore } from '@reduxjs/toolkit'
import dronesReducer from './Slices/DronesSlice'
import heightsReducer from './Slices/HeightSlice'
import { useDispatch, useSelector } from 'react-redux';


export default configureStore({
  reducer: {
    drones: dronesReducer,
    heights: heightsReducer
  },
})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = () => useSelector;

