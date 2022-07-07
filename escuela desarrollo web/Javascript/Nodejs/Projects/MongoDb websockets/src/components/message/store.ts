import { Message } from '../../types';
import MsjModel from './model';

const addMessage = (message:Message) => {
  const newMessage = new MsjModel(message);
  newMessage.save();
};

const listMessages = (filter:object) => new Promise((resolve, reject) => {
  console.log(filter);
  MsjModel
    .find(filter)
    .populate('user')
    .exec((err, populated) => {
      if (err) return reject(err);
      resolve(populated);
    });
});

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
