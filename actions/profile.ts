// Packages:
import FIREBASE from 'api/firebase'
import REDUX from 'api/redux'


// Typescript:
import { STATUS } from 'utils/returnable'


// Exports:
export const addProfilePicture = async (profilePictureURI: string, extension: string) => {
  const { payload, status } = await FIREBASE.profile.addProfilePicture(profilePictureURI, extension)
  if (status === STATUS.SUCCESS) REDUX.profile.addProfilePicture(payload)
}
