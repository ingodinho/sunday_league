import dotenv from "dotenv";

dotenv.config({path: "src/config/.env"});

export default {
    DB_URI: process.env.DB_URI,
    DB_NAME: process.env.DB_NAME,
    HASH_SECRET: process.env.HASH_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    FRONTEND_URL: process.env.FRONTEND_URL,
    DURATION_ACCESSTOKEN: process.env.DURATION_ACCESSTOKEN,
    DURATION_REFRESHTOKEN: process.env.DURATION_REFRESHTOKEN
}
