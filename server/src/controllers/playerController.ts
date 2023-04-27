import {Request, Response} from "express";
import playerService from "../services/player";
import {Player} from "../models/player/player";

const testRoute = (req: Request, res: Response) => {
    res.status(200).send("hello from the player-controller");
}

const getAll = async (req: Request, res: Response) => {
    try {
        const allPlayers = await playerService.getAll();
        res.status(200).json(allPlayers);
    } catch (error) {
        console.log("C: getAllPlayer: ", error);
        res.status(400).end();
    }
}

const getOneById = async (req: Request, res: Response) => {
    try {
        const playerId = req.params.id;
        const foundPlayer = await playerService.getOneById(playerId);
        res.status(200).json(foundPlayer);
    } catch(error) {
        console.log("C: getOnePlayerById: ", error);
        res.status(400).end();
    }
}

const add = async (req: Request, res: Response) => {
    try {
        const newPlayer = await playerService.add(req.body as Player);
        res.status(200).json(newPlayer);
    } catch (error) {
        console.log("C: addPlayer: ", error);
        res.status(400).end();
    }
}

export default {
    testRoute,
    add,
    getAll,
    getOneById
}
