import {NextFunction, Request, Response} from "express";
import {createHash, createRandomHash} from "../utils/encryption/createHash";

export const encryptPassword = (req: Request, res: Response, next: NextFunction) => {
    const passwordSalt = createRandomHash();

    req.body.passwordHash = createHash(req.body.password + passwordSalt);
    req.body.passwordSalt = passwordSalt;
    req.body.password = "";

    next();
}
