// Packages:
import FIREBASE from 'api/firebase'
import REDUX from 'api/redux'
import createReturnable, { STATUS } from 'utils/returnable'


// Typescript:


// Exports:
export const addProfilePicture = async (profilePictureURI: string, extension: string) => {
  const returnable = createReturnable<string>()
  const { payload, status } = await FIREBASE.profile.addProfilePicture(profilePictureURI, extension)
  if (status === STATUS.SUCCESS) {
    REDUX.profile.addProfilePicture(payload)
    returnable.status = STATUS.SUCCESS
    returnable.payload = payload
  }
  return returnable
}
