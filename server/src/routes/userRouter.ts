import express from "express";
import {userController} from "../controllers";

export const userRouter = express.Router();

userRouter.get("/", userController.getOneUser);
userRouter.post("/register", userController.registerUser);
