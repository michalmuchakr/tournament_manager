import React from 'react';
import SingleGameViewmodeList from './single_game_viewmode_list';

const GameListViewmodeList = ({ games }) => {
  return (
    <div className="card-list">
      {games.map(game => {
        return <SingleGameViewmodeList key={game._id} games={games} game={game}/>
      })}
    </div>
  );
};

export default GameListViewmodeList;
