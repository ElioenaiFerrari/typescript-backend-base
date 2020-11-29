import 'dotenv/config';
import dotenv from 'dotenv';

const { NODE_ENV } = process.env;
dotenv.config({ path: `.env.${NODE_ENV}` });

import 'module-alias/register';
import express from 'express';
import requireDir from 'require-dir';
import injector from '@/injector';
import '@config/database';

const middlewares = requireDir('middlewares');
const routers = requireDir('router');

const app = express();

injector.inject(app, { ...middlewares, ...routers });
injector.list();

export default app;
