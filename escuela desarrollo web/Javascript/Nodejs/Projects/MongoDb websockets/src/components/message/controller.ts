import { Request, Response } from 'express';

import { Message } from '../../types';
import * as str from './store';
import { success, error } from '../../network/response';
import { socket } from '../../socket';

const addMessage = (user:string, message:string, chat:string, file?:Express.Multer.File):Promise<Message> => new Promise(
  (resolve, reject) => {
    if (!user || !message || !chat) {
      return reject(new Error('User or message is missing'));
    }
    const fileUrl = (file)
      ? 'http://localhost:3000/app/files/' + file?.originalname
      : '';
    const fullMessage:Message = {
      chat,
      user,
      message,
      fileUrl,
      date: new Date(),
    };
    str.addMessage(fullMessage);
    socket.io.emit('message', fullMessage);
    resolve(fullMessage);
  },
);

const listMessages = (filter:object) => {
  return str.listMessages(filter);
};

const updateMessage = async (req:Request, res:Response) => {
  const msgId = req.params.id;
  const msgText = req.body.text;
  if (!msgId || !msgText) {
    return error(req, res, 'Incomplete data', 400);
  }
  try {
    const updatedMsg = await str.updateMessage(msgId, msgText);
    return success(req, res, updatedMsg);
  } catch (e) {
    return error(req, res, 'Cannot update', 400, e.message);
  }
};

const deleteMessage = async (req:Request, res:Response) => {
  const msgId = req.params.id;
  try {
    const deletedMsg = await str.deleteMessage(msgId);
    return (deletedMsg)
      ? success(req, res, deletedMsg)
      : error(req, res, 'Message not found', 404);
  } catch (e) {
    return error(req, res, 'Cannot update', 400, e.message);
  }
};

export { addMessage, listMessages, updateMessage, deleteMessage };
