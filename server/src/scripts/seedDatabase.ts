import mongoose, {ObjectId} from "mongoose";
import {MPlayerModel} from "../models/mongoose/playerModel";
import {MTeamModel} from "../models/mongoose/teamModel";
import env from "../config/config";
import {Player} from "../models/player/player";
import {Team} from "../models/team/team";

// SEEDING Database.
// 1. create player and team objects with data.
// 2. insert teams in db
// 3. updatePlayers with ids of the team.
// 4. insert updated players in db
// 5. update teams in db with the player id

const players : Player[] = [
    {firstName: "Norbert", lastName: "Nordbrock", team: "", stats: {goalkeeping: 3, defense: 15, midfield: 10, offense: 5}},
    {firstName: "Jannes", lastName: "Utecht", team: "", stats: {goalkeeping: 2, defense: 18, midfield: 5, offense: 3}},
    {firstName: "Ingo", lastName: "Siemens", team: "", stats: {goalkeeping: 1, defense: 5, midfield: 15, offense: 12}},
    {firstName: "Jens", lastName: "Boettcher", team: "", stats: {goalkeeping: 3, defense: 7, midfield: 18, offense: 12}},
    {firstName: "Matze", lastName: "Schgaup", team: "", stats: {goalkeeping: 3, defense: 9, midfield: 14, offense: 12}},
]

const teams : Team[] = [
    {name: "Gurkentruppe", players: []},
    {name: "Wahnsinnsmannschaft", players: []}
]

const seedDatabase = async () => {
    await mongoose.connect(`${env.DB_URI!}/${env.DB_NAME}`);

    const insertedTeams = await MTeamModel.insertMany(teams);

    const playersWithTeamIds = players.map((player, index) => {
        if(index % 2 === 0) {
            player.team = insertedTeams[0]._id;
            return player;
        }
        player.team = insertedTeams[1]._id;
        return player;
    })

    // todo: change any to appropriate type
    const insertedPlayers : any = await MPlayerModel.insertMany(playersWithTeamIds);

    const playersTeamOne : Player[] = insertedPlayers.filter((player: Player) => player.team === insertedTeams[0]._id.toString());
    const playersTeamTwo : Player[] = insertedPlayers.filter((player: Player) => player.team === insertedTeams[1]._id.toString());


    const playersTeamOneIds = playersTeamOne.map(player => player._id);
    const playersTeamTwoIds = playersTeamTwo.map(player => player._id);

    await MTeamModel.updateOne(
        {_id: insertedTeams[0]._id}, {$push : { players: { $each: playersTeamOneIds}}});
    await MTeamModel.updateOne(
        {_id: insertedTeams[1]._id}, {$push : { players: { $each: playersTeamTwoIds}}});

    await mongoose.disconnect();
}

seedDatabase();
