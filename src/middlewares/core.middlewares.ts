import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export default function (app: express.Application) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(cors({ origin: true }));

  return app;
}
