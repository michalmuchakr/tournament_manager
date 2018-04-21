import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';

class AddNewPlayer extends Component {
  render() {
    return (
      <div className="input-group ml-auto">
        <button type="button"
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#addEditPlayer"
                onClick={ this.props.newPlayer } >
          <Translate value="pages.players.addNew" />
        </button>
      </div>
    );
  }
}

export default AddNewPlayer;
