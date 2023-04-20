import express from "express";
import {userController} from "../controllers";
import {encryptPassword} from "../middleware/encryptMiddleware";

export const userRouter = express.Router();

userRouter.post("/register", encryptPassword, userController.register);
userRouter.post("/login", userController.login);
