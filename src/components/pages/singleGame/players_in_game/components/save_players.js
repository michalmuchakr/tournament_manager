import React from 'react';

const SavePlayers = ({ savePlayers }) => {
  return (
    <button
      className="btn btn-secondary btn-block"
      onClick={savePlayers} >
        Save Players
    </button>
  );
};

export default SavePlayers;
