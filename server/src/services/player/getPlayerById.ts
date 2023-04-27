import {MPlayerModel} from "../../models/mongoose/playerModel";

export const getOneById = async (id: string) => {
    const foundPlayer = await MPlayerModel.findById(id);
    if(!foundPlayer) {
        throw new Error("No Player Found with this ID");
    }
    return foundPlayer;
}
