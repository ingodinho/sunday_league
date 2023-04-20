import jwt from "jsonwebtoken";
import {User} from "../../models/user/user";
import env from "../../config/config";

const TEN_MINUTES_IN_SECONDS = 10 * 60;
const ONE_DAY_IN_SECONDS = 10 * 60 * 24;
const durationAccessToken = Number(env.DURATION_ACCESSTOKEN) || TEN_MINUTES_IN_SECONDS;
const durationRefreshToken = Number(env.DURATION_REFRESHTOKEN) || ONE_DAY_IN_SECONDS;

export const createToken = (user : User, tokenType = "access") => {
    const initiatedAt = Math.floor(Date.now() / 1000);
    const expiresAt = initiatedAt +
        (tokenType === "access"
            ? durationAccessToken
            : durationRefreshToken);

    const tokenPayload = {
        sub: user.id,
        exp: expiresAt,
        iat: initiatedAt,
        tokenType
    }

    if(!env.JWT_SECRET) {
        throw new Error("create Token: env Variable not initiated");
    }

    return jwt.sign(tokenPayload, env.JWT_SECRET, {algorithm: "HS256"});

}
