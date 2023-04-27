import express from "express";
import {playerController} from "../controllers";

export const playerRouter = express.Router();

playerRouter.get("/", playerController.testRoute);
playerRouter.get("/all", playerController.getAll);
playerRouter.get("/:id", playerController.getOneById);
playerRouter.post("/create", playerController.add);
