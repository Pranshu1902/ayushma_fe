import { Document } from "./project";

export type BaseModelType = {
  external_id: string;
  created_at: string;
  modified_at: string;
};

export type ChatType = BaseModelType & {
  title: string;
  namespace: string;
  chats?: ChatMessage[];
  username?: string;
};

export enum ChatMessageType {
  USER = 1,
  SYSTEM = 2,
  AYUSHMA = 3,
}

export type ChatFeedbackType = {
  chat_message: string;
  liked: boolean;
  message: string;
} | null;

export type ChatMessage = BaseModelType & {
  external_id?: string;
  messageType: ChatMessageType;
  message: string;
  translated_message?: string;
  reference_documents?: Document[];
  audio?: string;
  language: string;
  original_message: string;
  meta?: ChatMessageMeta;
  top_k?: number;
  temperature?: number;
  feedback?: ChatFeedbackType;
};

export type ChatConverseStream = {
  chat: string;
  input: string;
  delta: string;
  message: string;
  stop: boolean;
  error: boolean;
  ayushma_voice?: string;
};

export type ChatMessageMeta = {
  reference_start?: number;
  reference_end?: number;
  response_start?: number;
  response_end?: number;
  translate_start?: number;
  translate_end?: number;
  tts_start?: number;
  tts_end?: number;
  upload_start?: number;
  upload_end?: number;
};
