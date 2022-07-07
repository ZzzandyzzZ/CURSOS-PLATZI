import { Chat } from '../../types';
import * as str from './store';

const addChat = (users:Array<string>) => {
  if (!Array.isArray(users) || users.length <= 0) {
    return Promise.reject(new Error('User list empty'));
  }
  const newChat:Chat = {
    users,
  };
  return str.addChat(newChat);
};

const listChat = (userId = '') => {
  return str.listChats(userId);
};

export { addChat, listChat };
