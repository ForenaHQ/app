// Packages:
import { createSlice } from '@reduxjs/toolkit'


// Constants:
import { DEFAULT_PROFILE_PICTURE } from 'constants/user'


// Slices:
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profilePicture: DEFAULT_PROFILE_PICTURE,
  },
  reducers: {
    addProfilePicture: (state, action: { payload: string }) => {
      state.profilePicture = action.payload
    },
    removeProfilePicture: (state) => {
      state.profilePicture = DEFAULT_PROFILE_PICTURE
    },
  }
})


// Exports:
export default profileSlice
