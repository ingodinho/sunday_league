import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    createdAt: { type: Date, default: Date.now},
    stats: {
        goalkeeping: {type: Number, required: true},
        defense: {type: Number, required: true},
        midfield: {type: Number, required: true},
        offense: {type: Number, required: true}
    },
    team: {type: Schema.Types.ObjectId}
});

export const MPlayerModel = mongoose.model("player", PlayerSchema);
