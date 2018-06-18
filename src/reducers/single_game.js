const updatePlayer = (state, action) => {
  let players = Object.assign([], state[0].players);
  
  players.map(player => {
    if (action.id === player._id) {
      player.position = action.position
    }
    return true;
  })
  return players;
}

const preparePlayerToInsert = (state, action) => {
  let player = {
    _id: '',
    position: ''
  };

  player._id = action.player.id;
  player.position = action.player.position;

  return player;
}

const singleGame = ( state = [], action) => {
  switch (action.type) {

    case 'ADD_PLAYER_TO_GAME':
      const player = preparePlayerToInsert(state, action);

      return state.map( (item) => {
        return {
          ...item,
          players: [
            ...item.players,
            player
          ]
        };
      });

    case 'REMOVE_PLAYER_FROM_GAME':
      const newPlayers = state[0].players.filter(player => player._id !== action.id);

      return state.map( (item) => {
        return {
          ...item,
          players: newPlayers
        };
      });

    case 'UPDATE_PLAYER_POSITION':
      const players = updatePlayer(state, action);

      return state.map( (item) => {
        return {
          ...item,
          players,
          needSaved: true
        };
      });

    case 'SET_SINGLE_GAME':
      return action.singleGame;
    
    case 'GAME_NEEDS_SAVED':
      return state.map( (item) => {
        return {
          ...item,
          needSaved: action.needSaved
        };
      });

    case 'VALID_TIMIETABLE_GENERATOR':
      return state.map( (item) => {
        return {
          ...item,
          validTimeTable: action.data
        };
      });

    case 'SET_WAITING':
      return state.map( (item) => {
        return {
          ...item,
          waiting: action.waiting
        };
      });
    
    case 'SET_WAITING_FOR_TIMETABLE':
      return state.map( (item) => {
        return {
          ...item,
          waitingForTimeTable: action.waiting
        };
      });
    
    case 'CLEAR_SINGLE_GAME':
      return [];

    default:
      return state
  }
};

export default singleGame;
