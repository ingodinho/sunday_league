import mongoose, {Schema} from "mongoose";

interface Match extends mongoose.Document {
    homeTeam: Schema.Types.ObjectId,
    awayTeam: Schema.Types.ObjectId,
    createdAt: Date,
    result: {
        goalsHome: Number,
        goalsAway: Number,
        winner: Schema.Types.ObjectId
    }
}


const matchSchema = new Schema<Match> ({
    homeTeam: {type: Schema.Types.ObjectId, ref: "team", required: true},
    awayTeam: {type: Schema.Types.ObjectId, ref: "team", required: true},
    createdAt: {type: Date, default: Date.now()},
    result: {
        goalsHome: {type: Number, required: true},
        goalsAway: {type: Number, required: true},
        winner: {type: Schema.Types.ObjectId}
    }
})

export const MMatchModel = mongoose.model("match", matchSchema);
