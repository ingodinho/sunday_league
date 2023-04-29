export interface Match {
    _id: string,
    homeTeam: string,
    awayTeam: string,
    createdAt: Date,
    result: {
        goalsHome: Number,
        goalsAway: Number,
        winner: string
    }
}
