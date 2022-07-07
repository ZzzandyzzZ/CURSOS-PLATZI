export interface User {
  name: string,
}

export interface Message {
  chat: Mongoose.Types.ObjectId,
  user: Mongoose.Types.ObjectId,
  message: string,
  fileUrl: string,
  date: Date,
}

export interface Chat {
  users: Array<Mongoose.Types.ObjectId>
}

export type Msg = 'error' | 'ok';

export enum Enum {
  Val1 = 'val1',
  Val2 = 'val2',
}
