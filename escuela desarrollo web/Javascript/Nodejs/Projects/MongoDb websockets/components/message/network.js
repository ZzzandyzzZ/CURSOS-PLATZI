import {Router} from 'express';

import {success, error} from '../../network/response.js';
import {addMessage} from './controller.js';

const router = Router();

router.get('/', (req, res) =>{
  res.header({'custom': 'value1'});
  if (req.query.ok === 'false') {
    error(req, res, 'Intensional error', 500, 'it was on purpose');
    return;
  }
  success(req, res, 'Hello grom get', 200);
});

router.post('/', async (req, res) =>{
  const body = req.body;
  let fullMessage;
  try {
    fullMessage = await addMessage(body.user, body.message);
  } catch (e) {
    return error(req, res, 'Incomplete data', 400, e.message);
  }
  success(req, res, fullMessage);
});

export default router;
