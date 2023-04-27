import {Player} from "../../models/player/player";
import {MPlayerModel} from "../../models/mongoose/playerModel";

export const add = async (player : Player) => {
    return new MPlayerModel(player).save({});
}
