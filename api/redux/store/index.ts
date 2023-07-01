// Packages:
import { configureStore } from '@reduxjs/toolkit'


// Slices:
import profileSlice from '../slices/profile'
import conversationsSlice from '../slices/conversations'


// Constants:
const reduxStore = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    conversations: conversationsSlice.reducer,
  }
})


// Exports:
export default reduxStore
