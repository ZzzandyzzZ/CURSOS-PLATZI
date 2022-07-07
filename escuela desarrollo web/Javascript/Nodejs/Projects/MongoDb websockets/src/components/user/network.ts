import { Router } from 'express';

import { success, error } from '../../network/response';
import * as ctrl from './controller';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await ctrl.listUsers();
    success(req, res, users, 200);
  } catch (e) {
    error(req, res, 'Internal error', 500, e.message);
  }
});

router.post('/', async (req, res) => {
  const { body } = req;
  try {
    const newUser = await ctrl.addUser(body.name);
    return success(req, res, newUser);
  } catch (e) {
    return error(req, res, 'Cannot save user', 400, e.message);
  }
});

export default router;
