import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';

import players from './players';
import games from './games';
import singleGame from './single_game';
import auth from './auth';

const MainReducer = combineReducers({
  players,
  games,
  singleGame,
  auth,
  i18n: i18nReducer,
});

export default MainReducer;
