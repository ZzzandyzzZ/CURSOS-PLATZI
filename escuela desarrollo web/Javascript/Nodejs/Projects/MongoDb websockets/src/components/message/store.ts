import { Message } from '../../types';
import MsjModel from './model';

const addMessage = (message:Message) => {
  const newMessage = new MsjModel(message);
  newMessage.save();
};

const listMessages = async (filterMessages:string):Promise<Array<Message>> => {
  let filter = {};
  if (filterMessages) {
    filter = { user: filterMessages };
  }
  const data:Array<Message> = await MsjModel.find(filter);
  return data;
};

const updateMessage = async (id:string, text:string) => {
  const msg = await MsjModel.findById(id);
  if (!msg) {
    throw new Error('Id not found');
  }
  msg.message = text;
  const updatedMsg = await msg.save();
  return updatedMsg;
};

const deleteMessage = async (id:string) => {
  // const deleteState = await MsjModel.deleteOne({
  //   _id: id,
  // });
  const deleteState = await MsjModel.findByIdAndDelete(id);
  return deleteState;
};

export { addMessage, listMessages, updateMessage, deleteMessage };
