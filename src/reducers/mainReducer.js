import { combineReducers } from 'redux';

import players from './players';
import games from './games';
import singleGame from './single_game';
import auth from './auth';

const MainReducer = combineReducers({
  players,
  games,
  singleGame,
  auth
});

export default MainReducer;
