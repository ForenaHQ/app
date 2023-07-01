// Packages:
import createReturnable, { STATUS } from 'utils/returnable'


// Typescript:
import { Message } from 'types/messages'
import { MessageEngagementCursor } from 'types/conversations'


// Functions:
const storeTextMessage = async ({
  conversationID,
  message,
}: {
  conversationID: string
  message: Message
}) => {
  const returnable = createReturnable()
  try {
    /**
     * TODO:
     * @Sharan420 - Given the conversationID and message object, create an entry in the 
     * Ephemeral Database under the table name of the conversationID. The entry being the
     * message. Use message.id as the primary key.
     */
    returnable.status = STATUS.SUCCESS
    return returnable
  } catch (e) {
    returnable.payload = e as Error
    return returnable
  }
}

export const updateEngagementCursor = async ({
  conversationID,
  engagement,
}: {
  conversationID: string
  UID: string
  engagement: Partial<MessageEngagementCursor>
  localTime: number
}) => {
  const returnable = createReturnable()
  try {
    /**
     * TODO:
     * @Sharan420 - Given the conversationID and engagement object, create an entry in the 
     * Ephemeral Database under the table name of the "conversations". The entry being the
     * engagement object. Use conversationID as the primary key.
     */
    returnable.status = STATUS.SUCCESS
    return returnable
  } catch (e) {
    returnable.payload = e as Error
    return returnable
  }
}


// Exports:
export default {
  storeTextMessage,
  updateEngagementCursor,
}
