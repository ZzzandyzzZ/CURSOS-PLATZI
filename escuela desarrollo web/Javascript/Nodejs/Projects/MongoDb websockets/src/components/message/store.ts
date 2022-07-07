import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { Message } from '../../types';
import MsjModel from './model';

dotenv.config();

const URI = process.env.MONGO_URI || '';
mongoose.connect(URI);
const db = mongoose.connection;
db.on('error', (e) => console.error('error', e));
db.once('open', () => console.log('Mongoose is connected'));

const addMessage = (message:Message) => {
  const newMessage = new MsjModel(message);
  newMessage.save();
};

const listMessages = async ():Promise<Array<Message>> => {
  const data:Array<Message> = await MsjModel.find({});
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

export { addMessage, listMessages, updateMessage };
