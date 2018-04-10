const games = ( state = [], action) => {
  switch (action.type) {
    case 'SET_GAMES':
      return action.games;
    case 'ADD_GAME':
      return [
        ...state,
        action.game
      ]
    default:
      return state
  }
};

export default games;
