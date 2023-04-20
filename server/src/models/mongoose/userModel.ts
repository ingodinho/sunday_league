import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    passwordHash: String,
    passwordSalt: String,
    createdAt: { type: Date, default: Date.now}
})

export const UserModel = mongoose.model("user", UserSchema);
