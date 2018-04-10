import React from 'react';
import PropTypes from 'prop-types';
import GameListViewmodeList from './game_list_viewmode_list';
import GameListViewmodeColumn from './game_list_viewmode_column';

const GameListViewmode = ({ games, viewMode }) => {
  return (
    <div className="col-11 mt-3 mx-auto games">
      {viewMode === 'list'
        ? <GameListViewmodeList games={games} />
        : <GameListViewmodeColumn games={games} />
      }
    </div>
  );
};

GameListViewmode.propTypes = {
  games: PropTypes.array.isRequired
}

export default GameListViewmode;
