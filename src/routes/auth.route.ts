import express from 'express';
const router = express.Router();
const { celebrate }  = require('celebrate')
const auth = require('../validations/auth.validation')
import AuthController from '../controllers/auth.controller'

/*auth routes*/
router.post('/signin', [celebrate(auth.authValidation.signin)], AuthController.signIn)
router.post('/access-token', [celebrate(auth.authValidation.accessToken)], AuthController.accessToken)

export { router as authRouter };
