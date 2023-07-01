// Exports:
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

export type Reactions = Record<string, number>

export interface Message {
  id: string
  author: string
  messageType: MessageType
  body: string | Media
  timestamp: number
  replyingTo?: string
  isSpoiler?: boolean
  reactions?: Reactions
}

export interface LatestMessage extends Omit<
  Message,
  'replyingTo' | 'reactions'
> {}
