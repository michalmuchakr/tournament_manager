import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SinglePlayer extends Component {
  handleDelete = () => {
    let data = {
      id: this.props.player._id
    }
    this.props.deletePlayer(data);
  }

  render() {
    return (
      <div className="card mb-2">
        <div className="card-block d-flex align-items-center py-2 px-3">
          <div className="d-block">
            <h4 className="card-title mb-0">{ this.props.player.name } { this.props.player.last_name }</h4>
            <h5 className='small mt-2'>{ this.props.player.email }</h5>
          </div>
          {this.props.currentUser &&
            <div className="btn-group ml-auto" role="group" >
              <div onClick={() => this.props.editPlayer(this.props.player)}
                    className="btn btn-secondary"
                    data-toggle="modal"
                    data-target="#addEditPlayer">Edit</div>

              <div onClick={() => this.handleDelete()} className="btn btn-secondary">Archive</div>
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
