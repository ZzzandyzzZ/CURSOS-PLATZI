import { Router } from 'express';
import multer from 'multer';

import { success, error } from '../../network/response';
import * as ctrl from './controller';

const router = Router();
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'src/public/files/');
  },
  filename: function (_req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.get('/', async (req, res) => {
  const filterUserMsg:string = req.query.user as string;
  const filterChatMsg:string = req.query.chat as string;
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

router.post('/', upload.single('file'), async (req, res) => {
  const { user, message, chat } = req.body;
  const file = req.file;
  try {
    const fullMessage = await ctrl.addMessage(user, message, chat, file);
    return success(req, res, fullMessage);
  } catch (e) {
    return error(req, res, 'Incomplete data', 400, e.message);
  }
});

router.patch('/:id', ctrl.updateMessage);

router.delete('/:id', ctrl.deleteMessage);

export default router;
