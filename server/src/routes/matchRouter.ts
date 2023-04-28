import express from "express";
import {matchController} from "../controllers";

export const matchRouter = express.Router();

matchRouter.get("/all", matchController.getAll);
