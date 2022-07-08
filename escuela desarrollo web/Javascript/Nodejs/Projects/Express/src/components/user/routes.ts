import express from 'express';

const router = express.Router();

router.use('/', (req, res)=>{
  res.send('Hello from User');
});

export default router;
