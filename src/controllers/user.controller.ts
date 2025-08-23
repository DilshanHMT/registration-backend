import { Request, Response } from "express";
import UserService from "../services/user.service";
import { IResponseBody } from "../interfaces/common.interface";
import { IUser } from "../interfaces/user.interface";

class UserController {

    /**
     * health check controller
     * @param {Request} req 
     * @param {Response} res 
     */
    public static async healthcheck(req: Request, res: Response): Promise<any> {
        try {
            const responseBody: IResponseBody = {
                status: 200,
                message: 'Service is running fine',
                data: 'Service is running fine'
            }
            res.status(200).json(responseBody);
        }
        catch (error) {
            const responseBody: IResponseBody = {
                status: 500,
                message: 'Error',
                data: 'Error'
            }
            res.status(500).json(responseBody);
        }
    }

    /**
     * add data controller
     * @param {Request} req 
     * @param {Response} res 
     */
    public static async addData(req: Request, res: Response): Promise<any> {
        try {
            const requestBody: IUser = req?.body
            const response = await UserService.addData(requestBody)
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
     * get data controller
     * @param {Response} req 
     * @param {Response} res 
     *  
     */
    public static async getData(req: Request, res: Response): Promise<any> {
        try {
            const response = await UserService.getData()
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

export default UserController