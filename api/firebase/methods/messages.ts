// Packages:
import createReturnable, { STATUS } from 'utils/returnable'


// Typescript:
import { Message } from 'types/messages'


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


// Exports:
export default {
  sendTextMessage,
}
