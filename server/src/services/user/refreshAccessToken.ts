import {MUserModel} from "../../models/mongoose/userModel";
import {createToken} from "../../utils/token/createToken";
import {User} from "../../models/user/user";

export const refreshAccessToken = async (userId : string) => {
    const foundUser = await MUserModel.findOne({_id: userId}) as User;
    return createToken(foundUser);
}
