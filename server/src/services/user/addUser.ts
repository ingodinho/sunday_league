import {UserModel} from "../../models/mongoose/userModel";
import {User} from "../../models/user/user";

export const add = async (user: User) => {

    const foundUser = await UserModel.findOne({email: user.email});
    if (foundUser) {
        throw new Error("add User: E-Mail already taken");
    }

    const userInstance = new UserModel(user);
    return await userInstance.save();
}
