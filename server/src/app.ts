import dotenv from "dotenv";
dotenv.config({path: "src/config/.env"});

import express from "express";
import morgan from "morgan";
import cors from "cors";
import {router as indexRouter} from "./routes";
import mongoose from "mongoose";

const app = express();
const PORT = Number(process.env.PORT) || 9000;

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

app.use(indexRouter);

app.listen(PORT, () => console.log("Starts listening on Port: ", PORT));

const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/" + process.env.DB_NAME;
mongoose.connect(DB_URI).then(() => console.log("connection to mongodb established"));
