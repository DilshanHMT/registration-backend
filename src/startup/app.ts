import express, { Application } from 'express';
import "reflect-metadata";
const cors = require('cors');
import { authRouter } from '../routes/auth.route';
import { indexRouter } from '../routes/index.route';
import { userRouter } from '../routes/user.route';
import { errors } from '../middlewares/errors';
import { GiftRouter } from '../routes/gift.route';
const helmet = require("helmet");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

export default (app: Application) => {

    const SERVER_PREFIX = process.env.SERVER_PREFIX;

    app.use(helmet());
    app.use(logger('dev'));
    app.use(express.json());
    app.use(cors({
        origin: ["https://registration-chi-puce.vercel.app"],
        credential: true
    }));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(`/${SERVER_PREFIX}`, indexRouter);
    app.use(`/${SERVER_PREFIX}auth`, authRouter);
    app.use(`/${SERVER_PREFIX}user`, userRouter);
    app.use(`/${SERVER_PREFIX}gift`, GiftRouter);
    
    app.use(errors);

}
