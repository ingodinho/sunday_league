import {UserModel} from "../../models/mongoose/userModel";
import {UserRegisterDTO} from "../../models/user/userDTO";
import {createHash, createRandomHash} from "../../utils/encryption/createHash";

export const addUser = async (user : UserRegisterDTO) => {

    const passwordSalt = createRandomHash();
    const passwordHash = createHash(user.password + passwordSalt);

    const userInstance = new UserModel({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        passwordHash: passwordHash,
        passwordSalt: passwordSalt
    });

     return await userInstance.save();
}
