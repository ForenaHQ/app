// Exports:
export enum ConversationMemberType {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER'
}

export enum MessageType {
  TEXT = 'TEXT',
  MEDIA = 'MEDIA'
}

export enum MediaType {
  PHOTO = 'PHOTO',
  GIF = 'GIF',
  VIDEO = 'VIDEO',
  STICKER = 'STICKER'
}

export interface Media {
  type: MediaType
  source: string
  caption?: string
}

export interface Message {
  id: string
  author: string
  messageType: MessageType
  body: string | Media
  timestamp: number
}

export interface Conversation {
  id: string
  name?: string
  members: ConversationMemberType[]
  backgroundImage?: string
  messages: Message[]
}

export interface DatabaseConversation extends Omit<Conversation, 'members' | 'messages'> {
  members: Record<string, ConversationMemberType>
  messages: Record<string, Message>
}

export interface ConversationEngagement {
  isReceived: boolean
  isSeen: boolean
}
