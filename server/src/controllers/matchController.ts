import {Request, Response} from "express";
import matchService from "../services/match";

const getAll = async (req: Request, res: Response) => {
    try {
        const allMatches = await matchService.getAll();
        res.status(200).json(allMatches);
    } catch (error) {
        console.log("C: matchController, getAll: ", error);
        res.status(400).end();
    }
}

export default {
    getAll
}
