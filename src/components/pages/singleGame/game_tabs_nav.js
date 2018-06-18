import React from 'react';

const GameTabsNav = ({ game }) => {
  return (
    <ul className="nav nav-tabs pl-3 mb-3 mt-0" role="tablist">
      <li className="nav-item col px-0">
        <a className="nav-link active" data-toggle="tab" href="#info_tab" role="tab">Info</a>
      </li>
      <li className="nav-item col px-0">
        <a className="nav-link" data-toggle="tab" href="#players" role="tab">Players</a>
      </li>
      <li className="nav-item col px-0">
        <a className="nav-link" data-toggle="tab" href="#teams" role="tab">Teams</a>
      </li>
      <li className="nav-item col px-0">
        <a className="nav-link" data-toggle="tab" href="#time_table" role="tab">Time table</a>
      </li>
      {game.semiFinals &&
        <li className="nav-item col px-0">
          <a className="nav-link" data-toggle="tab" href="#finals_tab" role="tab">Finals</a>
        </li>
      }
    </ul>
  );
};

export default GameTabsNav;
