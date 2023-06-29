// Packages:
import { configureStore } from '@reduxjs/toolkit'


// Slices:
import profileSlice from '../slices/profile'


// Constants:
const reduxStore = configureStore({
  reducer: {
    profile: profileSlice.reducer
  }
})


// Exports:
export default reduxStore
