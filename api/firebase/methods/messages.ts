// Packages:
import createReturnable, { STATUS } from 'utils/returnable'


// Functions:
const sendTextMessage = async ({
  message,
  to,
}: {
  message: string
  to: string
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
