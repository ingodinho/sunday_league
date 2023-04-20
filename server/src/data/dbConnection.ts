import env from "../config/config";
import mongoose from "mongoose";

const DB_URI = `${env.DB_URI}/${env.DB_NAME}` || "mongodb://localhost:27017/sunday";

export const connectToMongoDB = mongoose.connect(DB_URI)
    .then(() => ("connection to mongodb established"));
