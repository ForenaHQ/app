// Packages:
import { configureStore } from '@reduxjs/toolkit'


// Slices:
import profileSlice from '../slices/profile'
import messagesSlice from '../slices/messages'


// Constants:
const reduxStore = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    messages: messagesSlice.reducer,
  }
})


// Exports:
export default reduxStore
