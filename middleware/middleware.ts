import { Request, Response, NextFunction } from 'express';

const logRequestMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url ='localhost:3000'+ req.originalUrl;

  console.log(`${timestamp}`);
  console.log(`${method}`);
  console.log(`${url}`);

  next();
};

export default logRequestMiddleware;
