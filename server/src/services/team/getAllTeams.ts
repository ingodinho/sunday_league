import {MTeamModel} from "../../models/mongoose/teamModel";

export const getAll = async () => {
    return MTeamModel.find();
}
