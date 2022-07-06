import { Message } from '../../types';

const list:Array<Message> = [];
const addMessage = (message:Message) => {
  list.push(message);
};

const listMessages = ():Array<Message> => {
  return list;
};
export { addMessage, listMessages };
