import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import PropTypes from 'prop-types';

class SingleGameViewmodeList extends Component {
  render() {
    const link = `/games/${ this.props.game._id }`;
    return (
      <div className="card mb-2">
        <div className="card-block d-flex align-items-center justify-content-between p-3">
          <h4 className="card-title mb-0">{ this.props.game.name }</h4>
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

SingleGameViewmodeList.propTypes = {
  game: PropTypes.object.isRequired
}

export default SingleGameViewmodeList;
