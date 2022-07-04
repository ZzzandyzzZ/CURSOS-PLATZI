export interface Message {
  user: string,
  message: string,
  date: Date,
}

export type Msg = 'error' | 'ok';

export enum Enum {
  Val1 = 'val1',
  Val2 = 'val2'
}
