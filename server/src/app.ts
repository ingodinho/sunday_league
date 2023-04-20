import env from "./config/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import {router as indexRouter} from "./routes";
import {connectToMongoDB} from "./data/dbConnection";

const app = express();
const PORT = Number(env.PORT) || 9000;
const FRONTEND_URL = env.FRONTEND_URL || "http://localhost:3000";

app.use(cors({origin: FRONTEND_URL, credentials: true}));
app.use(morgan("dev"));

app.use(express.json());

app.use(indexRouter);

app.listen(PORT, () => console.log("Starts listening on Port: ", PORT));

connectToMongoDB.then(res => console.log(res));
