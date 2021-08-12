import { createSlice } from '@reduxjs/toolkit'

export const dronesSlice = createSlice({
  name: 'drones',
  initialState: {
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
      state.position.origin = action.payload
    },
    origin: (state, action) => {
      state.position.destination = action.payload
    },
    position: (state, action,) => {
      state.dronesData[action.payload[0]].position.current = action.payload[1]
    },
    current: (state, action) => {
      state.isCurrent = action.payload
    },
    getHeight: (state, action) => {
      state.dronesData[action.payload[0]].height = action.payload[1]
    },
  },
})

// Action creators are generated for each case reducer function
export const { destination, origin, position, current, getHeight } = dronesSlice.actions

export default dronesSlice.reducer