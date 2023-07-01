// Packages:
import FIREBASE from 'api/firebase'
import { AUTH } from 'api/firebase/config'
import REDUX from 'api/redux'
import SQLITE from 'api/sqlite'
import { v4 } from 'uuid'


// Typescript:
import { ConversationEngagement, Message, MessageType } from 'types/messages'
import createReturnable, { STATUS } from 'utils/returnable'


// Constants:
import ERRORS from 'constants/errors'


// Exports:
export const sendTextMessage = async ({
  conversationID,
  body,
}: {
  conversationID: string
  body: string
}) => {
  // Setup:
  const returnable = createReturnable<any>()
  const currentUser = AUTH.currentUser
  if (!currentUser) {
    returnable.payload = ERRORS.AUTH.UNAUTHENTICATED
    return returnable
  }
  const message: Message = {
    body,
    author: currentUser.uid,
    id: v4(),
    messageType: MessageType.TEXT,
    timestamp: Date.now()
  }

  // SQL:
  const {
    status: SQLiteStatus,
    payload: SQLitePayload
  } = await SQLITE.messages.storeTextMessage({
    conversationID,
    message,
  })
  if (!SQLiteStatus) {
    returnable.payload = SQLitePayload
    return returnable
  }

  // Firebase:
  const {
    status: firebaseStatus,
    payload: firebasePayload
  } = await FIREBASE.messages.sendTextMessage({
    conversationID,
    message,
  })
  if (!firebaseStatus) {
    returnable.payload = firebasePayload
    return returnable
  }

  // Redux:
  REDUX.messages.addMessage({
    conversationID,
    message,
  })

  // Return:
  returnable.status = STATUS.SUCCESS
  return returnable
}

export const updateConversationEngagement = async ({
  conversationID,
  engagement,
}: {
  conversationID: string
  engagement: Partial<ConversationEngagement>
}) => {
  // Setup:
  const returnable = createReturnable<any>()
  const currentUser = AUTH.currentUser
  if (!currentUser) {
    returnable.payload = ERRORS.AUTH.UNAUTHENTICATED
    return returnable
  }

  // SQL:
  const {
    status: SQLiteStatus,
    payload: SQLitePayload
  } = await SQLITE.messages.updateConversationEngagement({
    conversationID,
    engagement,
  })
  if (!SQLiteStatus) {
    returnable.payload = SQLitePayload
    return returnable
  }

  // Firebase:
  const {
    status: firebaseStatus,
    payload: firebasePayload
  } = await FIREBASE.messages.updateConversationEngagement({
    conversationID,
    engagement,
  })
  if (!firebaseStatus) {
    returnable.payload = firebasePayload
    return returnable
  }

  // Redux:
  REDUX.messages.updateConversationEngagement({
    conversationID,
    engagement,
  })

  // Return:
  returnable.status = STATUS.SUCCESS
  return returnable
}
