import { Chat } from '../../types';
import ChatModel from './model';

const addChat = (chat:Chat) => {
  const newChat = new ChatModel(chat);
  return newChat.save();
};

const listChats = (userId:string) => new Promise(
  (resolve, reject) => {
    let filter = {};
    if (userId) filter = { users: userId };
    ChatModel
      .find(filter)
      .populate('users')
      .exec((err, populated) => {
        if (err) return reject(err);
        return resolve(populated);
      });
  },
);

export { addChat, listChats };
