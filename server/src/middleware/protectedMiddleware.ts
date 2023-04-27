import {NextFunction, Request, Response} from "express";
import jwt, {JwtPayload} from "jsonwebtoken";
import env from "../config/config";

// todo: find a better way to do this
declare global {
    namespace Express {
        interface Request {
            userClaims: string | JwtPayload
        }
    }
}

const createProtectedMiddleware = (tokenType? : string) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const token = extractTokenFromRequest(req, tokenType);
            req.userClaims = jwt.verify(token, env.JWT_SECRET!);
            next();
        } catch (error) {
            res.status(401).json({msg: " 401 Unauthorized! Please login first"});
        }

    }
}

const extractTokenFromRequest = (req: Request, tokenType?: string): string => {

    // case refresh-token
    if (tokenType === "refresh" && req.cookies.r3fr3sh) {
        const refreshToken = req.cookies.r3fr3sh;
        if(!refreshToken) {
            throw new Error("No Token info available");
        }
        return refreshToken;
    }

    // case access-token
    const tokenInfo = req.headers.authorization;

    if (!tokenInfo) {
        throw new Error("No Token info available");
    }

    const [tokenStrategy, token] = tokenInfo.split(" ");
    if (tokenStrategy !== "Bearer" || !token) {
        throw new Error("Invalid token strategy or no token provided");
    }

    return token;
}

// EXPORTS

export const protectedAccess = createProtectedMiddleware();
export const protectedRefresh = createProtectedMiddleware("refresh");
