import mongoose from "mongoose";
import {User} from "../user/user";

const Schema = mongoose.Schema;

const UserSchema = new Schema<User>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    passwordHash: {type: String, required: true},
    passwordSalt: {type: String, required: true},
    createdAt: { type: Date, default: Date.now}
})

export const MUserModel = mongoose.model("user", UserSchema);
