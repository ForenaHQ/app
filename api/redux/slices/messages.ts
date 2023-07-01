// Packages:
import { createSlice } from '@reduxjs/toolkit'


// Typescript:
import {
  Conversation,
  ConversationEngagement,
  Message
} from 'types/messages'


// Slices:
const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    currentConversationID: null as string | null,
    conversations: {} as Record<string, Conversation>,
    conversationEngagement: {} as Record<string, ConversationEngagement>
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
      state.conversations[action.payload.id] = action.payload
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
      const messages = state.conversations[action.payload.conversationID].messages
      messages.push(action.payload.message)
      state.conversations[action.payload.conversationID].messages = messages
    },
    updateConversationEngagement: (
      state,
      action: {
        payload: {
          conversationID: string
          engagement: Partial<ConversationEngagement>
        }
      }
    ) => {
      state.conversationEngagement[ action.payload.conversationID ] = {
        ...state.conversationEngagement[ action.payload.conversationID ],
        ...action.payload.engagement,
      }
    }
  }
})


// Exports:
export default messagesSlice
