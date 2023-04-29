# Next Steps

- CHECK MONGOOSE, Object ID in player.team

- Finish Team and Match Routes, Services, so that it works
- Review all Routes, add missing endpoints(delete, update), add validation
- Review Mongoose

- TESTS!

- Test Logout-Route


## Entities

- Player Schema
  - FirstName
  - LastName
  - Stats
    - defense
    - midfield
    - forward
    - goalkeeping
  - Team [relation to team/players]
  - (dob, position, matchHistory, matchstats etc.)
- Team Schema
  - Name
  - Players[relation to player ids]
- Match
  - HomeTeam[relation to teamId]
  - AwayTeam[relation to teamId]
  - Result
  - (goalscorer, matchup etc.)
