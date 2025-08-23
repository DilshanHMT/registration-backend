import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import { IResponseBody } from "../interfaces/common.interface";
import { ISignin, IAccessToken } from "../interfaces/auth.interface";

class AuthController {
    /**
 * signin controller
 * @param {Request} req 
 * @param {Response} res 
 */
    public static async signIn(req: Request, res: Response): Promise<any> {
        try {
            const requestBody: ISignin = req?.body
            const response = await AuthService.signIn(requestBody)
            const responseBody: IResponseBody = {
                status: response?.status,
                message: response?.message,
                data: response?.data
            }
            res.status(response?.status).json(responseBody)
        }
        catch (error: any) {
            const responseBody: IResponseBody = {
                status: 500,
                message: 'Error',
                data: error.message
            }
            res.status(500).json(responseBody);
        }
    }

    /**
* get access-token by refresh-token controller
* @param {Request} req 
* @param {Response} res 
*/
    public static async accessToken(req: Request, res: Response): Promise<any> {
        try {
            const requestBody: IAccessToken = req?.body
            const response = await AuthService.accessToken(requestBody)
            const responseBody: IResponseBody = {
                status: response?.status,
                message: response?.message,
                data: response?.data
            }
            res.status(response?.status).json(responseBody)
        }
        catch (error: any) {
            const responseBody: IResponseBody = {
                status: 500,
                message: 'Error',
                data: error.message
            }
            res.status(500).json(responseBody);
        }
    }

}

export default AuthController