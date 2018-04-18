import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Translate } from 'react-redux-i18n';

class SinglePlayer extends Component {
  handleDelete = () => {
    let data = {
      id: this.props.player._id
    }
    this.props.deletePlayer(data);
  }

  renderPositionBadge() {
    let badgeClass;

    if (this.props.player.position === 'attack') {
      badgeClass = 'badge-warning';
    } else if (this.props.player.position === 'defence') {
      badgeClass = 'badge-success';
    } else {
      badgeClass = 'badge-info';
    }

    return (
      <span className={ 'badge ' + badgeClass }>
        <Translate value={'pages.players.player.position.' + this.props.player.position } />
      </span>
    )
  }

  render() {
    return (
      <div className="card mb-2">
        <div className="card-block d-flex align-items-center py-2 px-3">
          <div className="d-block">
            <h4 className="card-title mb-0">
              { this.props.player.name } { this.props.player.last_name }
            </h4>
            <h5 className='small mt-2'>{ this.props.player.email }</h5>
            <p>{ this.renderPositionBadge() }</p>
          </div>
          {this.props.currentUser &&
            <div className="btn-group ml-auto" role="group" >
              <div onClick={() => this.props.editPlayer(this.props.player)}
                    className="btn btn-secondary"
                    data-toggle="modal"
                    data-target="#addEditPlayer">
                <Translate value="pages.players.player.edit" />
              </div>

              <div onClick={() => this.handleDelete()} className="btn btn-secondary">
                <Translate value="pages.players.player.archive" />
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

SinglePlayer.propTypes = {
  player: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
};

export default connect(mapStateToProps)(SinglePlayer);
