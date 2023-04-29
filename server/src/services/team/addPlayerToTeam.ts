import {MTeamModel} from "../../models/mongoose/teamModel";
import {MPlayerModel} from "../../models/mongoose/playerModel";

export const addOnePlayer = async (teamId : string, playerId: string) => {
    await MTeamModel.updateOne({_id: teamId}, {$push: {players: playerId}});
    return MPlayerModel.updateOne({_id: playerId}, {$set: {team: teamId}});
}
