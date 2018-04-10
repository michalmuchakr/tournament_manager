import _ from 'lodash';
export const TeamGenerator = {
  addedToGame: [],
  generateTeams(playersToRoll) {
    this.addedToGame = Object.assign([], playersToRoll);
    
    //baskets of positions
    let positionsGroups = {
          'atak': [],
          'obrona': [],
          'obojetnie': []
        },
        positionsHolder = Object.keys(positionsGroups);
    
    // fill baskets of players on positions
    for (let position of positionsHolder) {
      positionsGroups[position] = this.generatePositionArray(position);
    };
    
    let baskets = this.generateBaskets(positionsGroups),
        teams = this.rollTeamsFromBasket(baskets);
    
    return teams;
  },

  generatePositionArray(position) {
    let positionBox = _.filter(this.addedToGame, player => {
      return player.position === position
    });
    return positionBox;
  },

  generateBaskets(positionsGroups) {
    let playersOnPositions = Object.assign({}, positionsGroups),
        baskets = {
          'box_1': playersOnPositions.atak,
          'box_2': playersOnPositions.obrona
        },
        atakCount = playersOnPositions.atak.length, 
        deffCount = playersOnPositions.obrona.length,
        declaratedPlayersDiff = Math.abs(atakCount - deffCount),
        toFill = '';

    // equaliztion of baskets
    if (declaratedPlayersDiff !== 0) {
      atakCount < deffCount ? toFill = 'box_1' : toFill = 'box_2'

      for (let i = 0; i < declaratedPlayersDiff; i++) {
        baskets[toFill].push(playersOnPositions.obojetnie[0]);
        playersOnPositions.obojetnie.shift();
      }
    }

    // distribution of unsetted universal players
    playersOnPositions.obojetnie.forEach((element, index, array) => {
      let target;
      index % 2 === 0 ? target = 'box_1' : target = 'box_2';
      baskets[target].push(element);
    });
    return baskets;
  },

  rollTeamsFromBasket(baskets) {
    let teams = [],
        baseBaskets = Object.assign({}, baskets);

    baseBaskets.box_1 = this.shufleArray(baseBaskets.box_1);
    baseBaskets.box_2 = this.shufleArray(baseBaskets.box_2);
    
    baseBaskets.box_1.forEach((element, index) => {
      let team = {
            _id: element._id,
            players: [
              element['_id'],
              baseBaskets.box_2[0]['_id']
            ]
          };
      baseBaskets.box_2.shift();
      teams.push(team);
    });

    return teams;
  },

  shufleArray(arr){
    return _.shuffle(arr);
  }
};
