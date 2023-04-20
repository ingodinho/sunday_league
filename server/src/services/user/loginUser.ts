import {UserLoginDTO} from "../../models/user/userDTO";
import {UserModel} from "../../models/mongoose/userModel";
import {createHash} from "../../utils/encryption/createHash";
import {createToken} from "../../utils/token/createToken";
import {User} from "../../models/user/user";

export const login = async (loginCredentials : UserLoginDTO) => {
    const foundUser= await UserModel.findOne({email: loginCredentials.email});
    if(!foundUser) {
        throw new Error("login: no user found");
    }

    const inputPasswordHash= createHash(loginCredentials.password + foundUser.passwordSalt);
    const isCorrectPassword = inputPasswordHash === foundUser.passwordHash;

    if(!isCorrectPassword) {
        throw new Error("login: password is not correct");
    }

    const accessToken = createToken(foundUser as User);
    const refreshToken = createToken(foundUser as User, "refresh");

    return {
        accessToken,
        refreshToken
    }
}
