import {Match} from "../../models/match/match";
import {MMatchModel} from "../../models/mongoose/matchModel";

export const add = async (match : Match) => {
    return await new MMatchModel(match).save();
}
