import { IResponseBody } from "../interfaces/common.interface";
import { IUser } from "../interfaces/user.interface";
import UserRepository from "../repositories/user.repository";

class UserService {
  /**
   * add data service
   * @param {IOrder} requestBody
   * @returns {IResponseBody} responseBody
   */
  public static async addData(requestBody: IUser): Promise<any> {
    try {
      const response: IResponseBody = await UserRepository.addData(
        requestBody
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * get data service
     * @returns {IResponseBody} responseBody
     */
    public static async getData(): Promise<any> {
        try {
            const response: IResponseBody = await UserRepository.getData()
            return response
        }
        catch (error) {
            throw error
        }
    }
}

export default UserService;
