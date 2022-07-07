import { Router } from 'express';

import { success, error } from '../../network/response';
import * as ctrl from './controller';

const router = Router();

router.get('/', async (req, res) => {
  const filterMessages:string = req.query.user as string;
  try {
    const messages = await ctrl.listMessages(filterMessages);
    success(req, res, messages, 200);
  } catch (e) {
    error(req, res, 'Internal error', 500, e.message);
  }
});

router.post('/', async (req, res) => {
  const { body } = req;
  try {
    const fullMessage = await ctrl.addMessage(body.user, body.message);
    return success(req, res, fullMessage);
  } catch (e) {
    return error(req, res, 'Incomplete data', 400, e.message);
  }
});

router.patch('/:id', ctrl.updateMessage);

router.delete('/:id', ctrl.deleteMessage);

export default router;
