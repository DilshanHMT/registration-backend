import { Request, Response } from "express";
import { IResponseBody } from "../interfaces/common.interface";

class IndexController {

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

}

export default IndexController