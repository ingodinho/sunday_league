import mongoose from "mongoose";
import {MPlayerModel} from "../models/mongoose/playerModel";
import {MTeamModel} from "../models/mongoose/teamModel";
import env from "../config/config";
import {Player} from "../models/player/player";
import {Team} from "../models/team/team";
import {faker} from "@faker-js/faker";


// Clearing Database
// 1. Deleting all Documents in PLAYER and TEAM Collection
// SEEDING Database.
// 1. create player and team objects with data.
// 2. insert teams in db
// 3. updatePlayers with ids of the team.
// 4. insert updated players in db
// 5. update teams in db with the player id

const players : Player[] = new Array(22).fill("whatever").map(() => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        stats: {
            goalkeeping: faker.datatype.number({max: 20, min: 1, precision: 1}),
            defense: faker.datatype.number({max: 20, min: 1, precision: 1}),
            midfield: faker.datatype.number({max: 20, min: 1, precision: 1}),
            offense: faker.datatype.number({max: 20, min: 1, precision: 1}),
        },
        team: ""
    };
})

const teams : Team[] = [
    {name: "Gurkentruppe", players: []},
    {name: "Wahnsinnsmannschaft", players: []}
]

const clearDatabase = async () => {
    await MTeamModel.deleteMany();
    await MPlayerModel.deleteMany();
}

const seedDatabase = async () => {
    await mongoose.connect(`${env.DB_URI!}/${env.DB_NAME}`);

    await clearDatabase();

    const insertedTeams = await MTeamModel.insertMany(teams);

    const playersWithTeamIds = players.map((player, index) => {
        if(index % 2 === 0) {
            // player.team = mongoose.mongo.ObjectId(insertedTeams[0]._id);
            player.team = insertedTeams[0]._id;
            return player;
        }
        player.team = insertedTeams[1]._id;
        return player;
    })

    // todo: change any to appropriate type
    const insertedPlayers : any = await MPlayerModel.insertMany(playersWithTeamIds);

    const playersTeamOne : Player[] = insertedPlayers.filter((player: Player) => player.team === insertedTeams[0]._id);
    const playersTeamTwo : Player[] = insertedPlayers.filter((player: Player) => player.team === insertedTeams[1]._id);


    const playersTeamOneIds = playersTeamOne.map(player => player._id);
    const playersTeamTwoIds = playersTeamTwo.map(player => player._id);

    await MTeamModel.updateOne(
        {_id: insertedTeams[0]._id}, {$push : { players: { $each: playersTeamOneIds}}});
    await MTeamModel.updateOne(
        {_id: insertedTeams[1]._id}, {$push : { players: { $each: playersTeamTwoIds}}});

    await mongoose.disconnect();
}

seedDatabase();
