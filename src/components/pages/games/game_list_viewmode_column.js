import React from 'react';
import SingleGameViewmodeColumn from './single_game_viewmode_column';

const GameListViewmodeColumn = ({ games }) => {
  return (
    <div className="card-columns">
      {games.map(game => {
        return <SingleGameViewmodeColumn key={game._id} games={games} game={game}/>
      })}
    </div>
  );
};

export default GameListViewmodeColumn;
