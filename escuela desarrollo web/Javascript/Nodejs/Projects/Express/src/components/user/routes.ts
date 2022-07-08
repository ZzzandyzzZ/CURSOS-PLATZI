import express from 'express';
import boom from '@hapi/boom';

const router = express.Router();

router.get('/', (req, res)=>{
  res.send('Hello from User');
});

router.get('/error', (req, res)=>{
  throw boom.notFound('No encontrado');
  throw boom.notAcceptable('Un error inducido');
  res.send('No llego aqui :(');
});

export default router;
