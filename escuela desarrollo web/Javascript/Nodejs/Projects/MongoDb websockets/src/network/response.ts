import { Request, Response } from 'express';

const success = (_req:Request, res:Response, message:unknown, status = 200):void => {
  res.status(status)
    .send({
      error: '',
      body: message,
    });
};
const error = (_req:Request, res:Response, message:string, status = 500, detail = ''):void => {
  if (detail) console.error('ERROR', detail);
  res.status(status)
    .send({
      error: message,
      body: '',
    });
};

export { success, error };
