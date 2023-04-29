import {MatchUpDTO} from "../../models/match/matchDTO";
import {MTeamModel} from "../../models/mongoose/teamModel";
import {Player} from "../../models/player/player";
import {Team} from "../../models/team/team";

export const calcMatch = async (matchUp : MatchUpDTO) => {
    const [teamHome, teamAway] = await Promise.all([
        MTeamModel.findById(matchUp.homeTeam),
        MTeamModel.findById(matchUp.awayTeam).populate("players").exec()
    ]);
    if(!teamHome || !teamAway) {
        throw new Error("not both teams were found in the db");
    }
    // const scoreTeamHome = teamHome.players.map((player : Player) => {

    // })

}
