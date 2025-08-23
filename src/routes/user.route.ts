import express from 'express';
const router = express.Router();
const { celebrate } = require('celebrate')
const user = require('../validations/user.validation')
import UserController from '../controllers/user.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

/*user routes*/
router.post('/create', [celebrate(user.userValidation.addData)], [AuthMiddleware.authenticateToken], UserController.addData)
router.get('/get', [AuthMiddleware.authenticateToken], UserController.getData)

export { router as userRouter };
