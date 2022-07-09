import { Request, Response, NextFunction } from 'express';

const logError = (err:Error, req: Request, res: Response, next: NextFunction)=>{
  console.error('Logueando un error', err.message);
  next(err);
};

const errorHandler = (err:Error, req: Request, res: Response, {})=>{
  res.json({
    message: 'Controle tu error',
    error: err.message,
  });
};

const boomErrorHandler = (err:any, req: Request, res: Response, next: NextFunction)=>{
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
};

export { logError, errorHandler, boomErrorHandler };
