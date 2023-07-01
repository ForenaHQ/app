// Imports:
import { LatestMessage, Message } from './messages'


// Exports:
export enum ConversationMemberType {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER'
}

export interface MessageEngagementCursor {
  isReceived: boolean
  isSeen: boolean
}

export interface ConversationEngagementCursor {
  received: Record<string, number>
  seen: Record<string, number>
}

export interface Conversation {
  id: string
  isGroup?: boolean
  name?: string
  members: ConversationMemberType[]
  profilePicture?: string
  backgroundImage?: string
  messages: Message[]
  latestMessage: LatestMessage
  engagementCursors: ConversationEngagementCursor
}

export interface DatabaseConversation extends Omit<Conversation, 'members' | 'messages'> {
  members: Record<string, ConversationMemberType>
  messages: Record<string, Message>
}

export interface FlatConversation extends Omit<
  Conversation,
  'members' | 'messages'
> {}
