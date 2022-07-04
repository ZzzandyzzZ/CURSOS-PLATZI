import { Message } from '../../types';

import * as strMessage from './store';

const addMessage = (user:string, message:string):Promise<Message> => new Promise(
  (resolve, reject) => {
    if (!user || !message) {
      return reject(new Error('User or message is missing'));
    }
    const fullMessage:Message = {
      user,
      message,
      date: new Date()
    };
    strMessage.add(fullMessage);
    resolve(fullMessage);
  }
);

const listMessages = ():Promise<Array<Message>> => new Promise(
  (resolve, reject) => {
    try {
      resolve(strMessage.list());
    } catch (e) {
      reject(e);
    }
  }
);

export { addMessage as add, listMessages as list };
