import express, {Request, Response} from "express";
import morgan from "morgan";
import cors from "cors";
import {router as indexRouter} from "./routes";

const app = express();
const PORT = Number(process.env.PORT) || 9000;

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

app.use(indexRouter);

app.listen(PORT, () => console.log("Starts listening on Port: ", PORT));
