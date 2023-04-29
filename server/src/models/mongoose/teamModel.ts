import mongoose from "mongoose";
import {Team} from "../team/team";

const Schema = mongoose.Schema;

const teamSchema = new Schema <Team> ({
    name: {type: String, required: true},
    players: [{type: Schema.Types.ObjectId, ref: "player"}],
    createdAt: {type: Date, default: Date.now()}
});

export const MTeamModel = mongoose.model("team", teamSchema);
