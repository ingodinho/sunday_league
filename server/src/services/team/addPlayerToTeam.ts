import {MTeamModel} from "../../models/mongoose/teamModel";

export const addOnePlayer = async (teamId : string, playerId: string) => {
    return MTeamModel.updateOne({_id: teamId}, {$push: {players: playerId}});
}
