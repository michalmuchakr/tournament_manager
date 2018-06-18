import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import PropTypes from 'prop-types';

class SingleGameViewmodeColumn extends Component {
  render() {
    const link = `/games/${ this.props.game._id }`;
    return (
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between bg-dark text-white align-items-center">
          <h4 className="card-title mb-0 w-75 txt-over">{ this.props.game.name }</h4>
          <small>{ this.props.game.tournamentData.slice(0,10) }</small>
        </div>
        <div className="card-block d-flex p-3">
          <p>{ this.props.game.description }</p>
        </div>
        <div className="card-footer text-right transparent-bg p-1">
          <div className="btn-group" role="group">
            <Link className="btn btn-outline-secondary" to={ link }>Go to tournament</Link>
            <a className="btn btn-outline-secondary">
              <span className="fa fa-pencil-square-o" aria-hidden="true"></span>
            </a>
            <a className="btn btn-outline-secondary">
              <span className="fa fa-trash-o" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

SingleGameViewmodeColumn.propTypes = {
  game: PropTypes.object.isRequired
}

export default SingleGameViewmodeColumn;
