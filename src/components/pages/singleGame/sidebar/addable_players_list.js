import React, { Component } from 'react';
import AddableSinglePlayer from './addable_single_player';

class AddablePlayersList extends Component {
  render() {
    return (
      <div className="players">
        {this.props.availableToAdd.map(player => {
          return <AddableSinglePlayer key={player._id} player={player}/>
        })}
      </div>
    );
  }
}

export default AddablePlayersList;
