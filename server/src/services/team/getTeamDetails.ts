import {MTeamModel} from "../../models/mongoose/teamModel";

export const getDetailsById = async (teamId : string)=> {
    return MTeamModel.findById(teamId).populate("players").exec();
}
