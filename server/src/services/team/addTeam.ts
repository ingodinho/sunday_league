import {Team} from "../../models/team/team";
import {MTeamModel} from "../../models/mongoose/teamModel";

export const add = async (team: Team) => {
    return await new MTeamModel(team).save();
}
