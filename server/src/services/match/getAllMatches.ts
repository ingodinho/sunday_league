import {MMatchModel} from "../../models/mongoose/matchModel";

export const getAll = async () => {
    return MMatchModel.find();
}
