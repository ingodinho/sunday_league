import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    firstName: String,
    lastName: String,
    createdAt: { type: Date, default: Date.now},
    stats: {
        goalkeeping: Number,
        defense: Number,
        midfield: Number,
        offense: Number
    },
    team: String
});

export const MPlayerModel = mongoose.model("player", PlayerSchema);
