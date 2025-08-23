import {Request, Response, NextFunction} from 'express';

export function errors(error:Error , req:Request , res: Response, next: NextFunction){
    const errorBody = {
        status: 500,
        message: 'failed',
        data: error.message
    }
    return res.status(500).json(errorBody);
}