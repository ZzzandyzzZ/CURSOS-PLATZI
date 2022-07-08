import express, { Application } from 'express';
import userRouter from '../components/user/routes';


const apiV1 = express.Router();

const routes = (app:Application)=>{
  apiV1.use('/user', userRouter);
  app.use('/api/v1', apiV1);
};

export default routes;
