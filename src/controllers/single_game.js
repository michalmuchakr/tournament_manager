import _ from 'lodash';
export const SingleGameController = {
  checkForAvailableToAdd(allPlayers, addedPlayers) {
    return _.differenceBy(allPlayers, addedPlayers, '_id');
  },
  
  countPositions(players) {
    let positionsCounter = {
          atak: 0,
          obrona: 0,
          obojetnie: 0
        },
        positions = players.map(player => player.position);

    positions.map(position => {
      positionsCounter[position]++;
      return true;
    })

    return positionsCounter;
  }
}
