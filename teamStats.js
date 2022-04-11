const team = {
  _players: [
    { firstName: "Pete", lastName: "Wheeler", age: 54 },
    { firstName: "Dakota", lastName: "Crocker", age: 44 },
    { firstName: "Mike", lastName: "Miami", age: 34 },
  ],
  _games: [
    { opponent: "Jets", teamPoints: 50, opponentPoints: 53 },
    { opponent: "Giants", teamPoints: 62, opponentPoints: 59 },
    { opponent: "Eagles", teamPoints: 56, opponentPoints: 56 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Titans", 100, 98);
console.log(team.games);
