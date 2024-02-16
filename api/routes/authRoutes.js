import express from 'express';
import { signUp, google, signIn } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/google', google);

export default router;
