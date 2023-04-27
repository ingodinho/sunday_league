import express from "express";
import {teamController} from "../controllers";

export const teamRouter = express.Router();

teamRouter.post("/new", teamController.add);
