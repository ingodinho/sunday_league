import {Request, Response} from "express";
import teamService from "../services/team";
import {Team} from "../models/team/team";

const getAll = async (req: Request, res: Response) => {
    try {
        const allTeams = await teamService.getAll();
        res.status(200).json(allTeams);
    } catch(error) {
        console.log("C: teamController, getAll: ", error);
        res.status(400).end();
    }
}

const getDetailsById = async (req: Request, res: Response) => {
    try {
        const teamDetails = await teamService.getDetailsById(req.params.id);
        res.status(200).json(teamDetails);
    } catch (error) {
        console.log("C: teamController, getDetailsById", error);
        res.status(400).end();
    }
}

const add = async (req: Request, res: Response) => {
    try {
        const newTeam = await teamService.add(req.body as Team);
        res.status(200).json(newTeam);
    } catch (error) {
        console.log("C: teamController, add: ", error);
        res.status(400).end();
    }
}

const addOnePlayer = async (req: Request, res: Response) => {
    try {
        const updatedTeam = await teamService.addOnePlayer(req.body.teamId, req.body.playerId);
        res.status(200).json(updatedTeam);
    } catch (error) {
        console.log("C: teamController, addOnePlayer: ", error);
        res.status(400).end();
    }
}

export default {
    add,
    addOnePlayer,
    getAll,
    getDetailsById
}
