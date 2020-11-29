import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import express from 'express';

const router = Router();

router.post('/recovery', AuthController.recovery);
router.post('/signin', AuthController.signin);
router.post('/signup', AuthController.signup);
router.put('/signout', AuthController.signout);

export default (app: express.Application) => app.use('/auth', router);
