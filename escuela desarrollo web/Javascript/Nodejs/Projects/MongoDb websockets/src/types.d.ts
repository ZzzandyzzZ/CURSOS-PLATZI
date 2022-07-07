export interface User {
  name: string,
}

export interface Message {
  user: Mongoose.Types.ObjectId,
  message: string,
  date: Date,
}

export type Msg = 'error' | 'ok';

export enum Enum {
  Val1 = 'val1',
  Val2 = 'val2',
}
