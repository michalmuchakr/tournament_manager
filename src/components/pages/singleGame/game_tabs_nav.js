import React from 'react';

const GameTabsNav = () => {
  return (
    <ul className="nav nav-tabs pl-3 my-3" role="tablist">
      <li className="nav-item">
        <a className="nav-link active" data-toggle="tab" href="#players" role="tab">Players</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#teams" role="tab">Teams</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#time-table" role="tab">Time table</a>
      </li>
    </ul>
  );
};

export default GameTabsNav;
