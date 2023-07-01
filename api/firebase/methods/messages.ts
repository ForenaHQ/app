// Packages:
import createReturnable, { STATUS } from 'utils/returnable'


// Typescript:
import {
  ConversationEngagement,
  Message
} from 'types/messages'


// Functions:
const sendTextMessage = async ({
  conversationID,
  message,
}: {
  conversationID: string
  message: Message
}) => {
  const returnable = createReturnable()
  try {
    returnable.status = STATUS.SUCCESS
    return returnable
  } catch (e) {
    returnable.payload = e as Error
    return returnable
  }
}

export const updateConversationEngagement = async ({
  conversationID,
  engagement,
}: {
  conversationID: string
  engagement: Partial<ConversationEngagement>
}) => {
  const returnable = createReturnable()
  try {
    returnable.status = STATUS.SUCCESS
    return returnable
  } catch (e) {
    returnable.payload = e as Error
    return returnable
  }
}


// Exports:
export default {
  sendTextMessage,
  updateConversationEngagement,
}
