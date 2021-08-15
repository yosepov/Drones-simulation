import { createSlice } from '@reduxjs/toolkit'

export const dronesSlice = createSlice({
  name: 'drones',
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
    dronesData: [{
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    }, {
      position: {
        origin: [0, 0, 0],
        destination: [0, 0, 0],
        current: [0, 0, 0]
      },
      status: "NOT_STARTED",
      isCurrent: false,
      height: 0,
      isInRest: true,
      isLanding: false,
      isTakeOff: false,
      speed: 0.01,
    },],

  },
  reducers: {
    destination: (state, action) => {
      state.dronesData[action.payload[0]].position.destination = action.payload[1]
    },
    origin: (state, action) => {
      state.position.destination = action.payload
    },
    position: (state, action,) => {
      state.dronesData[action.payload[0]].position.current = action.payload[1]
    },
    heightPosition: (state, action,) => {
      state.dronesData[action.payload[0]].position.current[1] = action.payload[1]
    },
    current: (state, action) => {
      state.isCurrent = action.payload
    },
    getHeight: (state, action) => {
      state.dronesData[action.payload[0]].height = action.payload[1]
    },
    checkForAvailableHeight: (state, drone) => {
      let i = 0
      while (state.heights[i].drone === -1 || i === -1) {
        if (state.heights[i].drone === -1) {
          state.heights[i].drone = drone.payload
          state.heights[i].available = false
          console.log("Drone: " + drone + " on height: " + state.heights[i].height)
          console.log("Height redux state: " + state.heights[i])
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
export const { destination, origin, position, current, getHeight, heightPosition, checkForAvailableHeight } = dronesSlice.actions

export default dronesSlice.reducer