import { Message } from '../../types';

import * as str from './store';

const addMessage = (user:string, message:string):Promise<Message> => new Promise(
  (resolve, reject) => {
    if (!user || !message) {
      return reject(new Error('User or message is missing'));
    }
    const fullMessage:Message = {
      user,
      message,
      date: new Date(),
    };
    str.addMessage(fullMessage);
    resolve(fullMessage);
  },
);

const listMessages = ():Promise<Array<Message>> => new Promise(
  (resolve, reject) => {
    try {
      resolve(str.listMessages());
    } catch (e) {
      reject(e);
    }
  },
);

export { addMessage, listMessages };
