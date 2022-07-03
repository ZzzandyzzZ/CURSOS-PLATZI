export interface Message {
  user: string,
  message: string,
  date: Date,
};

export type Msg = 'error' | 'ok';
