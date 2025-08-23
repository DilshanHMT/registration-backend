import jwtAuth from '../config/auth'
const jwt = require('jsonwebtoken');
import { Request, Response, NextFunction } from "express";
import { IResponseBody } from "../interfaces/common.interface";

class AuthMiddleware {

/**
* auth middleware
* @param {Request} req 
* @param {Response} res 
*/
    public static async authenticateToken(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req?.headers["authorization"];
            jwt.verify(token?.replace('Bearer ', ''), jwtAuth.accessSecret, (error: any, decoded: any) => {
                if (error) {
                    const responseBody: IResponseBody = {
                        status: 401,
                        message: 'Invalid token',
                        data: {}
                    }
                    return res.status(401).json(responseBody)
                }

                if (decoded?.email) {
                    next();
                }
                else {
                    const responseBody: IResponseBody = {
                        status: 401,
                        message: 'Unauthorized token',
                        data: {}
                    }
                    return res.status(401).json(responseBody)
                }
            });
        }
        catch (error: any) {
            const responseBody: IResponseBody = {
                status: 500,
                message: 'Error',
                data: error.message
            }
            return res.status(500).json(responseBody);
        }
    }
}

export default AuthMiddleware