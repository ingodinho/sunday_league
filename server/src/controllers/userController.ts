import {Request, Response} from "express";
import userService from "../services/user";
import {UserLoginDTO} from "../models/user/userDTO";
import {User} from "../models/user/user";

const register = async (req : Request, res : Response) => {
    try {
        const newUser = await userService.add(req.body as User);
        res.status(200).json(newUser);
    } catch (error) {
        console.log("C: registerUser", error);
        res.status(400).end();
    }
}

const login = async (req: Request, res : Response) => {
    try {
        const {accessToken, refreshToken} = await userService.login(req.body as UserLoginDTO);

        res.cookie("r3fr3sh", refreshToken, {
            secure: true,
            httpOnly: true,
            sameSite: "none"
        });

        res.status(200).json({accessToken});
    } catch (error) {
        console.log("C: loginUser", error);
        res.status(400).end();
    }
}

export default {
    register,
    login
}
