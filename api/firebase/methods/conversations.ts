// Packages:
import createReturnable, { STATUS } from 'utils/returnable'


// Typescript:
import { Message } from 'types/messages'
import { MessageEngagementCursor } from 'types/conversations'


// Functions:
const setLatestMessage = async ({
  conversationID,
  message,
}: {
  conversationID: string
  message: Message
}) => {
  const returnable = createReturnable<any>()
  try {
    returnable.status = STATUS.SUCCESS
    return returnable
  } catch (e) {
    returnable.payload = e as Error
    return returnable
  }
}

const updateEngagementCursor = async ({
  conversationID,
  UID,
  engagement,
}: {
  conversationID: string
  UID: string
  engagement: Partial<MessageEngagementCursor>
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
  setLatestMessage,
  updateEngagementCursor
}
