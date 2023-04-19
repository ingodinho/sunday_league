import {userRouter} from "./userRouter";
import express from "express";

export const router = express.Router();

const apiV1 = "/api/v1";

router.use(apiV1 + "/user", userRouter);
