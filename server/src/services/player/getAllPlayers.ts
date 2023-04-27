import {MPlayerModel} from "../../models/mongoose/playerModel";

export const getAll = async () => {
    return MPlayerModel.find();
}
