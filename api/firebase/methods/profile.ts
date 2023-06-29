// Packages:
import createReturnable, { STATUS } from 'utils/returnable'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'


// Constants:
import { AUTH, STORAGE } from '../config'
import ERRORS from 'constants/errors'


// Functions:
const addProfilePicture = async (profilePictureURI: string, extension: string) => {
  const returnable = createReturnable<string>()
  try {
    const currentUser = AUTH.currentUser
    if (!currentUser) {
      returnable.payload = ERRORS.AUTH.UNAUTHENTICATED
      return returnable
    }
    const UID = currentUser.uid
    const fetchResponse = await fetch(profilePictureURI)
    const blobImage = await fetchResponse.blob()
    const imageRef = ref(STORAGE, `${ UID }/profile-picture.${ extension }`)
    const uploadTask = await uploadBytes(imageRef, blobImage)
    const downloadUrl = await getDownloadURL(uploadTask.ref)
    returnable.status = STATUS.SUCCESS
    returnable.payload = downloadUrl
    return returnable
  } catch (e) {
    returnable.payload = e as Error
    return returnable
  }
}


// Exports:
export default {
  addProfilePicture,
}
