import express from 'express';
import boom from '@hapi/boom';

import createUserSchema from './schema';
import validatorHandler from '../../middlewares/validator.handler';

const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Hello from User');
});

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  (req, res)=>{
    res.json(req.body);
  },
);

router.get('/error', (req, res)=>{
  throw boom.notFound('No encontrado');
  throw boom.notAcceptable('Un error inducido');
  res.send('No llego aqui :(');
});

export default router;
