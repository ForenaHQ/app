/**
 * TODO:
 * Queries:
 * getDiurnalMessages
 * 
 * Mutation:
 * createConversation
 * editConversationDetails
 */

// Packages:
import createReturnable, { STATUS } from 'utils/returnable'
import SQLITE from 'api/sqlite'
import FIREBASE from 'api/firebase'
import REDUX from 'api/redux'


// Typescript:
import { MessageEngagementCursor } from 'types/conversations'
import { AUTH } from 'api/firebase/config'


// Constants:
import ERRORS from 'constants/errors'


// Functions:
const updateEngagementCursor = async ({
  conversationID,
  engagement,
}: {
  conversationID: string
  engagement: Partial<MessageEngagementCursor>
}) => {
  // Setup:
  const returnable = createReturnable<any>()
  const currentUser = AUTH.currentUser
  if (!currentUser) {
    returnable.payload = ERRORS.AUTH.UNAUTHENTICATED
    return returnable
  }
  const UID = currentUser.uid
  const localTime = Date.now()

  // SQL:
  const {
    status: SQLiteStatus,
    payload: SQLitePayload
  } = await SQLITE.conversations.updateEngagementCursor({
    conversationID,
    UID,
    engagement,
    localTime,
  })
  if (!SQLiteStatus) {
    returnable.payload = SQLitePayload
    return returnable
  }

  // Firebase:
  const {
    status: firebaseStatus,
    payload: firebasePayload
  } = await FIREBASE.conversations.updateEngagementCursor({
    conversationID,
    UID,
    engagement,
  })
  if (!firebaseStatus) {
    returnable.payload = firebasePayload
    return returnable
  }

  // Redux:
  REDUX.conversations.updateEngagementCursor({
    conversationID,
    UID,
    engagement,
    localTime,
  })

  // Return:
  returnable.status = STATUS.SUCCESS
  return returnable
}


// Exports:
export default {
  mutations: {
    updateEngagementCursor,
  }
}
