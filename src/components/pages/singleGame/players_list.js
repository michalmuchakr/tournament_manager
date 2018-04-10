import React, {Component} from 'react';
import SinglePlayerAdded from './singlePlayerAdded';
import Package from './players_list';

class PlayersInGame extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.playersAdded.map(player => {
          return <SinglePlayerAdded key={player._id} player={player} {...this.props}/>
        })}
      </ul>
    );
  }
};

export default PlayersInGame;
