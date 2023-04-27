import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface Team extends mongoose.Document {
    name: string;
    players: Array<string>;
}

const teamSchema = new Schema <Team> ({
    name: {type: String, required: true},
    players: [{type: Schema.Types.ObjectId, ref: "player"}],
});

export const MTeamModel = mongoose.model("team", teamSchema);
