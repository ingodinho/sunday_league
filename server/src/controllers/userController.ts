import {Request, Response} from "express";
import {findAll} from "../data/userDAO";

const getOneUser = async (req : Request, res : Response) => {
    const user = await findAll();
    res.json(user);
}

export default {
    getOneUser
}
