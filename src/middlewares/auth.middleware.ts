import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

function verifyAuthorizationLength(authorization: string[]): string[] {
  if (authorization.length !== 2) throw new Error('unauthorized');

  return authorization;
}

function getAuthorization(req: Request): string {
  const { authorization } = req.headers;

  if (!authorization) throw new Error('unauthorized');

  return authorization;
}

function getToken(authorization: string): string {
  const splitedAuthorization = authorization.split(' ');

  return verifyAuthorizationLength(splitedAuthorization)[1];
}

function authMiddleware(req: Request, res: Response, next: Function) {
  try {
    const authorization = getAuthorization(req);

    const token = getToken(authorization);

    const user = jwt.verify(token, '');
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export default (app: express.Application) =>
  app.use('/protect', authMiddleware);
