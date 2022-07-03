import { Router } from 'express';

import { success, error } from '../../network/response';
import addMessage from './controller';

const router = Router();

router.get('/', (req, res) => {
  res.header({ custom: 'value1' });
  if (req.query.ok === 'false') {
    error(req, res, 'Intensional error', 500, 'it was on purpose');
    return;
  }
  success(req, res, 'Hello grom get', 200);
});

router.post('/', async (req, res) => {
  const { body } = req;
  let fullMessage;
  try {
    fullMessage = await addMessage(body.user, body.message);
  } catch (e) {
    return error(req, res, 'Incomplete data', 400, e.message);
  }
  return success(req, res, fullMessage);
});

export default router;
