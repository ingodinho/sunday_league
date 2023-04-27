import {Request, Response} from "express";
import teamService from "../services/team";
import {Team} from "../models/team/team";

const add = async (req: Request, res: Response) => {
    try {
        const newTeam = await teamService.add(req.body as Team);
        res.status(200).json(newTeam);
    } catch (error) {
        console.log("C: teamController, add: ", error);
        res.status(400).end();
    }
}

export default {
    add
}
