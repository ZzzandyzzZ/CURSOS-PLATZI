import { Router } from 'express';

import { success, error } from '../../network/response';
import * as ctrl from './controller';

const router = Router();

router.get('/', async (req, res) => {
  const filterUserMsg:string = req.query.user as string;
  const filterChatMsg:string = req.query.chat as string;
  // const filter = (filterUserMsg || filterChatMsg)
  //   ? { user: filterUserMsg, chat: filterChatMsg }
  //   : {};
  const filter = {
    ...filterUserMsg && { user: filterUserMsg },
    ...filterChatMsg && { chat: filterChatMsg },
  };
  try {
    const messages = await ctrl.listMessages(filter);
    success(req, res, messages, 200);
  } catch (e) {
    error(req, res, 'Internal error', 500, e.message);
  }
});

router.post('/', async (req, res) => {
  const { user, message, chat } = req.body;
  try {
    const fullMessage = await ctrl.addMessage(user, message, chat);
    return success(req, res, fullMessage);
  } catch (e) {
    return error(req, res, 'Incomplete data', 400, e.message);
  }
});

router.patch('/:id', ctrl.updateMessage);

router.delete('/:id', ctrl.deleteMessage);

export default router;
