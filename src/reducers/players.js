const players = ( state = [], action) => {
  switch (action.type) {
    case 'SET_PLAYERS':
      return {
        ...state,
        playersList: action.players
      }
    case 'SET_WAITING_PLAYERS':
      return {
        ...state,
        waitPlayers: action.waiting
      }
    case 'SET_PLAYER_TO_EDIT':
      return {
        ...state,
        editHandler: {
          editPlayer: action.player,
          editing: action.editing
        }
      }
    case 'SET_SAVE_WAITING_PLAYERS':
      return {
        ...state,
        waitForSavePlayer: action.waiting
      }
    default:
      return state;
  }
};

export default players;
