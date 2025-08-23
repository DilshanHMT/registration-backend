import { getRepository } from "typeorm";
import { IResponseBody } from "../interfaces/common.interface";
import { ISignin, IAccessToken } from "../interfaces/auth.interface";
import { Auth } from "../entities/auth.entity";
import jwtAuth from '../config/auth'
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthRepository {

    /**
 * signup repository
 * @param {ISignin} requestBody 
 * @returns {IResponseBody} responseBody
 */
    public static async signIn(requestBody: ISignin): Promise<any> {
        try {
            const { email, password } = requestBody;

            const user = await Auth.findOne({ where: { authEmail: email } });

            if (!user) {
                const responseBody: IResponseBody = {
                    status: 403,
                    message: 'Invalid user',
                    data: {}
                }
                return responseBody
            }

            const passwordIsValid = bcrypt.compareSync(
                password,
                user?.rpassword
            );
            if (!passwordIsValid) {
                const responseBody: IResponseBody = {
                    status: 403,
                    message: 'Invalid password',
                    data: {}
                }
                return responseBody
            }

            const accessToken = jwt.sign({ email: user?.authEmail, id: user?.id, name: user?.authName }, jwtAuth.accessSecret, {
                expiresIn: jwtAuth.accessTime
            });

            const refreshToken = jwt.sign({ email: user?.authEmail, id: user?.id, name: user?.authName }, jwtAuth.refreshSecret, {
                expiresIn: jwtAuth.refreshTime
            });

            const userId = user?.id;

            const responseBody: IResponseBody = {
                status: 201,
                message: 'Succesfully logged in',
                data: {
                    accessToken,
                    refreshToken,
                    userId
                }
            }
            return responseBody

        }
        catch (error) {
            throw error
        }
    }

    /**
* get access-token by refresh-token repository
* @param {IAccessToken} requestBody 
* @returns {IResponseBody} responseBody
*/
    public static async accessToken(requestBody: IAccessToken): Promise<any> {
        try {
            const { refreshToken } = requestBody;
            const refreshTokenData = jwt.verify(refreshToken, jwtAuth.refreshSecret)

            if (!refreshTokenData?.email) {
                const responseBody: IResponseBody = {
                    status: 401,
                    message: 'Invalid refresh token',
                    data: {}
                }
                return responseBody
            }

            const accessToken = jwt.sign({ email: refreshTokenData?.email, id: refreshTokenData?.id, name: refreshTokenData?.contactName }, jwtAuth.accessSecret, {
                expiresIn: jwtAuth.accessTime
            });

            const responseBody: IResponseBody = {
                status: 201,
                message: 'Succesfully refresh the token',
                data: {
                    accessToken
                }
            }
            return responseBody

        }
        catch (error) {
            console.log("rf-error", error);
            throw error
        }
    }
}

export default AuthRepository