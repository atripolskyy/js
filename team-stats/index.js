const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Alex',
      lastName: 'Anch',
      age: 21
    },
    {
      firstName: 'Vika',
      lastName: 'Chez',
      age: 18
    },
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 7
    },
    {
      opponent: 'Oncos',
      teamPoints: 12,
      opponentPoints: 57
    },
    {
      opponent: 'Roncos',
      teamPoints: 33,
      opponentPoints: 27
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this._players.push(player);
  },
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts,
    };

    this._games.push(game);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);

console.log(team.games);
