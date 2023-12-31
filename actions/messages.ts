/**
 * TODO:
 * reactToMessage
 * sendMediaMessage
 * deleteMessage
 */

// Packages:
import FIREBASE from 'api/firebase'
import { AUTH } from 'api/firebase/config'
import REDUX from 'api/redux'
import SQLITE from 'api/sqlite'
import { v4 } from 'uuid'
import createReturnable, { STATUS } from 'utils/returnable'


// Typescript:
import {
  Message,
  MessageType,
} from 'types/messages'


// Constants:
import ERRORS from 'constants/errors'


// Exports:
const sendTextMessage = async ({
  conversationID,
  body,
  isSpoiler,
  replyingTo,
}: {
  conversationID: string
  body: string
  isSpoiler: Message['isSpoiler']
  replyingTo: Message['replyingTo']
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
    timestamp: Date.now(),
    isSpoiler,
    replyingTo,
  }

  // SQL:
  const {
    status: SQLiteStatus,
    payload: SQLitePayload
  } = await SQLITE.conversations.storeTextMessage({
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
  REDUX.conversations.addMessage({
    message,
  })

  // Return:
  returnable.status = STATUS.SUCCESS
  return returnable
}

export default {
  mutations: {
    sendTextMessage,
  }
}