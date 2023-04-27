import {MUserModel} from "../../models/mongoose/userModel";
import {User} from "../../models/user/user";

export const add = async (user: User) => {

    const foundUser = await MUserModel.findOne({email: user.email});
    if (foundUser) {
        throw new Error("add User: E-Mail already taken");
    }

    const userInstance = new MUserModel(user);
    return await userInstance.save();
}
