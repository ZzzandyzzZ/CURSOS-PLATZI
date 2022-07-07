import { Request, Response } from 'express';

import { Message } from '../../types';
import * as str from './store';
import { success, error } from '../../network/response';

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

const listMessages = (filterMessages:string):Promise<Array<Message>> => new Promise(
  (resolve, reject) => {
    try {
      resolve(str.listMessages(filterMessages));
    } catch (e) {
      reject(e);
    }
  },
);

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
