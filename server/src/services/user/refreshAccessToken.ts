import {UserModel} from "../../models/mongoose/userModel";
import {createToken} from "../../utils/token/createToken";
import {User} from "../../models/user/user";

export const refreshAccessToken = async (userId : string) => {
    const foundUser = await UserModel.findOne({_id: userId});
    return createToken(foundUser as User);
}
