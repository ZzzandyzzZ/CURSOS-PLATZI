import { Router } from 'express';

import { success, error } from '../../network/response';
import * as ctrl from './controller';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const chats = await ctrl.listChat();
    success(req, res, chats, 200);
  } catch (e) {
    error(req, res, 'Internal error', 500, e.message);
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const chats = await ctrl.listChat(userId);
    success(req, res, chats, 200);
  } catch (e) {
    error(req, res, 'Internal error', 500, e.message);
  }
});

router.post('/', async (req, res) => {
  const { users } = req.body;
  try {
    const newChat = await ctrl.addChat(users);
    return success(req, res, newChat);
  } catch (e) {
    return error(req, res, 'Cannot save user', 400, e.message);
  }
});

export default router;
