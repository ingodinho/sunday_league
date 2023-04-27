export interface Player {
    _id? : string;
    firstName: string,
    lastName: string,
    createdAt: Date,
    stats: {
        goalkeeping: Number,
        defense: Number,
        midfield: Number,
        offense: Number
    },
    team: String
}
