import express from "express";
import {userController} from "../controllers";
import {encryptPassword} from "../middleware/encryptMiddleware";
import {protectedAccess, protectedRefresh} from "../middleware/protectedMiddleware";

export const userRouter = express.Router();

// for testing
userRouter.get("/protected", protectedAccess, userController.protectedRoute);

userRouter.post("/register", encryptPassword, userController.register);
userRouter.post("/login", userController.login);
userRouter.post("/refresh", protectedRefresh, userController.refreshAccessToken);
userRouter.post("/logout", protectedAccess, userController.logout);
