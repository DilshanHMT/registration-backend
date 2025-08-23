import express from 'express';
const router = express.Router();
import IndexController from '../controllers/index.controller'

/*index routes*/
router.get('/', IndexController.healthcheck)

export { router as indexRouter };
