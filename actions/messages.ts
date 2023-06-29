// Packages:
import FIREBASE from 'api/firebase'
import REDUX from 'api/redux'


// Exports:
export const sendTextMessage = async ({
  message,
  to,
}: {
  message: string
  to: string
}) => {
  const { status } = await FIREBASE.messages.sendTextMessage({
    message,
    to
  })
  
}
