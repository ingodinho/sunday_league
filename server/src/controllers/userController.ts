import {Request, Response} from "express";
import {addUser} from "../services/user/addUser";
import {UserRegisterDTO} from "../models/user/userDTO";

const registerUser = async (req : Request, res : Response) => {
    try {
        const newUser = await addUser(req.body as UserRegisterDTO);
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}

export default {
    registerUser
}
