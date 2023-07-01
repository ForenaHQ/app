// Packages:
import createReturnable, { STATUS } from 'utils/returnable'
import CONVERSATIONS from './conversations'


// Typescript:
import {
  Media,
  Message,
  MessageType
} from 'types/messages'


// Functions:
const updateMetrics = {
  incrementMessageCount: async (message: Message) => {
    const returnable = createReturnable<any>()
    try {
      const isMedia = message.messageType === MessageType.MEDIA
      const mediaType = isMedia ? (message.body as Media).type : undefined
      // TODO: Call Realtime Database
      returnable.status = STATUS.SUCCESS
      return returnable
    } catch (e) {
      returnable.payload = e as Error
      return returnable
    }
  }
}

const sendTextMessage = async ({
  conversationID,
  message,
}: {
  conversationID: string
  message: Message
}) => {
  const returnable = createReturnable()
  try {
    const { status: setLatestMessageStatus } = await CONVERSATIONS.setLatestMessage({
      conversationID,
      message
    })
    const { status: incrementMessageStatus } = await updateMetrics.incrementMessageCount(message)
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
}
