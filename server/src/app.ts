import {JwtPayload} from "jsonwebtoken";

// todo: find a better place for this
declare global {
    namespace Express {
        interface Request {
            userClaims: string | JwtPayload
        }
    }
}

import env from "./config/config";
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

import {router as indexRouter} from "./routes";
import {connectToMongoDB} from "./data/dbConnection";

const app = express();
const PORT = Number(env.PORT) || 9000;
const FRONTEND_URL = env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({origin: FRONTEND_URL, credentials: true}));
app.use(morgan("dev"));

// PARSER
app.use(express.json());
app.use(cookieParser());

// ROUTER
app.use(indexRouter);

app.listen(PORT, () => console.log("Starts listening on Port: ", PORT));

connectToMongoDB.then(res => console.log(res));
