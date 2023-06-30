// Packages:
import { createSlice } from '@reduxjs/toolkit'


// Typescript:
import { Conversation, Message } from 'types/messages'


// Slices:
const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    currentConversationID: null as string | null,
    conversations: {} as Map<string, Conversation>
  },
  reducers: {
    setCurrentConversationID: (
      state,
      action: {
        payload: string | null
      }
    ) => {
      state.currentConversationID = action.payload
    },
    addConversation: (
      state,
      action: {
        payload: Conversation
      }
    ) => {
      state.conversations.set(action.payload.id, action.payload)
    },
    addMessage: (
      state,
      action: {
        payload: {
          conversationID: string
          message: Message
        }
      }
    ) => {
      state.conversations
        .get(action.payload.conversationID)?.messages
        .push(action.payload.message)
    }
  }
})


// Exports:
export default messagesSlice
