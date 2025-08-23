import { Gift } from "../entities/gift.entity";
import { User } from "../entities/user.entity";
import { IResponseBody } from "../interfaces/common.interface";

class GiftRepository {
  /**
   * get data repository
   * @returns {IResponseBody} responseBody
   */
  public static async getData(): Promise<any> {
    try {
      const gifts = await Gift.find();
      const responseBody: IResponseBody = {
        status: 200,
        message: "Data fetched successfully",
        data: {
          data: gifts,
        },
      };
      return responseBody;
    } catch (error) {
      throw error;
    }
  }

  /**
   * update gift with winner information
   * @param {object} requestBody - should contain winnerNumber
   * @returns {IResponseBody} responseBody
   */
  public static async updateData(requestBody: {
    winnerNumber: string;
  }): Promise<any> {
    try {
      const { winnerNumber } = requestBody;

      // Find user by userContact matching winnerNumber
      const user = await User.findOne({
        where: { userContact: winnerNumber },
      });

      if (!user) {
        const responseBody: IResponseBody = {
          status: 404,
          message: "User not found with the provided contact number",
          data: {},
        };
        return responseBody;
      }

      // Find first gift where giftIsSelected = false (0) ordered by id ASC
      const availableGift = await Gift.findOne({
        where: { giftIsSelected: false },
        order: { id: "ASC" },
      });

      if (!availableGift) {
        const responseBody: IResponseBody = {
          status: 404,
          message: "No available gifts found",
          data: {},
        };
        return responseBody;
      }

      // Update the gift with winner information
      await Gift.update(availableGift.id, {
        giftIsSelected: true,
        giftWinner: user.userContact,
        giftWinnerName: user.userName,
      });

      // Update user to mark as winner
      await User.update(user.userId, {
        userIsWinner: true, // or 1, depending on your preference
      });

      // Fetch the updated gift
      const updatedGift = await Gift.findOne({
        where: { id: availableGift.id },
      });

      const responseBody: IResponseBody = {
        status: 200,
        message: "Gift assigned successfully",
        data: updatedGift,
      };
      return responseBody;
    } catch (error) {
      throw error;
    }
  }
}

export default GiftRepository;
