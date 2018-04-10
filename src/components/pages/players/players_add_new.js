import React, { Component } from 'react';

class AddNewPlayer extends Component {
  render() {
    return (
      <div className="input-group ml-auto">
        <button type="button"
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#addEditPlayer"
                onClick={ this.props.newPlayer } >
          Add new player
        </button>
      </div>
    );
  }
}

export default AddNewPlayer;
