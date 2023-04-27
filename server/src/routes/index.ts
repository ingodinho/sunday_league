import {userRouter} from "./userRouter";
import {playerRouter} from "./playerRouter";
import express from "express";
import {teamRouter} from "./teamRouter";

export const router = express.Router();

const apiV1 = "/api/v1";

router.use(apiV1 + "/user", userRouter);
router.use(apiV1 + "/player", playerRouter);
router.use(apiV1 + "/team", teamRouter);
