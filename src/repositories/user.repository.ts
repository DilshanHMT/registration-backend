import { User } from "../entities/user.entity";
import { IResponseBody } from "../interfaces/common.interface";
import { IUser } from "../interfaces/user.interface";

class UserRepository {
  /**
   * Add data repository
   * @param {IUser} requestBody
   * @returns {IResponseBody} responseBody
   */
  public static async addData(requestBody: IUser): Promise<IResponseBody> {
    try {
      const { userName, userType, userEmail, userContact } = requestBody;

      const user = User.create({
        userName,
        userType,
        userEmail,
        userContact,
      });

      await user.save();

      return {
        status: 201,
        message: "User Added Successfully",
        data: user,
      };
    } catch (error: any) {
      if (error.code === "23505") {
        return {
          status: 400,
          message: "User Already Registered",
          data: null,
        };
      }

      if (error.code === "ER_DUP_ENTRY") {
        return {
          status: 400,
          message: "User Already Registered",
          data: null,
        };
      }

      throw error;
    }
  }

  /**
   * get data repository
   * @returns {IResponseBody} resposeBody
   */
  public static async getData(): Promise<any> {
    try {
      const users = await User.find({
        where: { userIsWinner: false },
      });

      const responseBody: IResponseBody = {
        status: 200,
        message: "Data fetched successfully",
        data: {
          data: users,
        },
      };
      return responseBody;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
