import { IResponseBody } from '../interfaces/common.interface'
import { ISignin, IAccessToken } from '../interfaces/auth.interface'
import AuthRepository from '../repositories/auth.repository'

class AuthService {

    /**
    * signin service
    * @param {ISignin} requestBody 
    * @returns {IResponseBody} responseBody
    */
    public static async signIn(requestBody: ISignin): Promise<any> {
        try {
            const response: IResponseBody = await AuthRepository.signIn(requestBody)
            return response
        }
        catch (error) {
            throw error
        }
    }

    /**
    * get access-token by refresh-token service
    * @param {IAccessToken} requestBody 
    * @returns {IResponseBody} responseBody
    */
    public static async accessToken(requestBody: IAccessToken): Promise<any> {
        try {
            const response: IResponseBody = await AuthRepository.accessToken(requestBody)
            return response
        }
        catch (error) {
            throw error
        }
    }


}

export default AuthService