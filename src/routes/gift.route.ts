import express from 'express';
const router = express.Router();
import { celebrate } from 'celebrate';
const gift = require('../validations/gift.validation')
import GiftController from '../controllers/gift.controller'
import AuthMiddleware from '../middlewares/auth.middleware';

/*gift routes*/
router.get('/get', [AuthMiddleware.authenticateToken], GiftController.getData)
router.put('/update', [celebrate(gift.giftValidation.updateData)], [AuthMiddleware.authenticateToken], GiftController.updateData)

export { router as GiftRouter };