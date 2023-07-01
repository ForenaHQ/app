// Packages:
import { createSlice } from '@reduxjs/toolkit'


// Typescript:
import { Message } from 'types/messages'
import {
  Conversation,
  MessageEngagementCursor,
  FlatConversation
} from 'types/conversations'


// State:
const initialState = {
  currentConversationID: null as string | null,
  messages: [] as Message[],
  conversations: {} as Record<string, FlatConversation>,
}

type ConversationsState = typeof initialState


// Reducers:
const messages = {
  setMessages: (
    state: ConversationsState,
    action: {
      payload: {
        messages: Message[]
      }
    }
  ) => {
    state.messages = action.payload.messages
  },
  clearMessages: (
    state: ConversationsState
  ) => {
    state.messages = []
  },
  addMessage: (
    state: ConversationsState,
    action: {
      payload: {
        message: Message
      }
    }
  ) => {
    state.messages.push(action.payload.message)
  },
  addReaction: (
    state: ConversationsState,
    action: {
      payload: {
        reaction: string
        messageID: Message['id']
      }
    }
  ) => {
    const messageIndex = state.messages.findIndex(message => message.id === action.payload.messageID)
    const reactionCount = state.messages[messageIndex].reactions?.[action.payload.reaction] as number | undefined
    state.messages[messageIndex] = {
      ...state.messages[messageIndex],
      reactions: {
        [ action.payload.reaction ]: reactionCount ? reactionCount + 1 : 1
      }
    }
  },
  removeReaction: (
    state: ConversationsState,
    action: {
      payload: {
        reaction: string
        messageID: Message['id']
      }
    }
  ) => {
    const messageIndex = state.messages.findIndex(message => message.id === action.payload.messageID)
    const reactionCount = state.messages[messageIndex].reactions?.[action.payload.reaction] as number
    if (reactionCount === 1) {
      delete state.messages[messageIndex].reactions?.[action.payload.reaction]
    } else if (reactionCount) {
      state.messages[messageIndex] = {
        ...state.messages[messageIndex],
        reactions: {
          [ action.payload.reaction ]: reactionCount - 1
        }
      }
    }
  }
}

const conversations = {
  setCurrentConversationID: (
    state: ConversationsState,
    action: {
      payload: string | null
    }
  ) => {
    state.currentConversationID = action.payload
  },
  addConversation: (
    state: ConversationsState,
    action: {
      payload: Conversation
    }
  ) => {
    state.conversations[action.payload.id] = action.payload
  },
  updateEngagementCursor: (
    state: ConversationsState,
    action: {
      payload: {
        conversationID: string
        UID: string
        engagement: Partial<MessageEngagementCursor>
        localTime: number
      }
    }
  ) => {
    let engagementCursors = state.conversations[ action.payload.conversationID ].engagementCursors
    if (action.payload.engagement.isReceived) {
      engagementCursors = {
        ...engagementCursors,
        received: {
          ...state.conversations[ action.payload.conversationID ].engagementCursors.received,
          [ action.payload.UID ]: action.payload.localTime
        },
      }
    }
    if (action.payload.engagement.isSeen) {
      engagementCursors = {
        ...engagementCursors,
        seen: {
          ...state.conversations[ action.payload.conversationID ].engagementCursors.seen,
          [ action.payload.UID ]: action.payload.localTime
        },
      }
    }
  }
}


// Slice:
const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    ...conversations,
    ...messages,
  }
})


// Exports:
export default conversationsSlice
