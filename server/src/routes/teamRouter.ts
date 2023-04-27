import express from "express";
import {teamController} from "../controllers";

export const teamRouter = express.Router();

teamRouter.get("/all", teamController.getAll);
teamRouter.get("/details/:id", teamController.getDetailsById);
teamRouter.post("/new", teamController.add);
teamRouter.put("/addoneplayer", teamController.addOnePlayer);
