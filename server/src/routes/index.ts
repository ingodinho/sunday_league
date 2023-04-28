import {userRouter} from "./userRouter";
import {playerRouter} from "./playerRouter";
import {teamRouter} from "./teamRouter";
import {matchRouter} from "./matchRouter";
import express from "express";

export const router = express.Router();

const apiV1 = "/api/v1";

router.use(apiV1 + "/user", userRouter);
router.use(apiV1 + "/player", playerRouter);
router.use(apiV1 + "/team", teamRouter);
router.use(apiV1 + "/match", matchRouter);
