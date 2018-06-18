import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  addplayerToGame,
  setNeedToSaveState } from 'actions/';

class AddableSinglePlayer extends Component {
  state = {
    data: {
      position: 'obojetnie'
    }
  }

  handleDelete = () => {
    this.props.currentUser &&
      this.props.deletePlayer(this.props.player.id);
  }

  onChange = e => {
    this.props.currentUser &&
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          [e.target.name]: e.target.value
        }
      })
  };

  addPlayerToList = () => {
    let data = {
      id: this.props.player._id,
      position: this.state.data.position,
      name: this.props.player.name
    };
    this.props.addplayerToGame(data);
    this.props.setNeedToSaveState(true);
  }

  render() {
    return (
      <div className="card mb-2">
        <div className="card-block d-flex align-items-center p-0">
          <h4 className="card-title mb-0">{ this.props.player.name }</h4>
            {this.props.currentUser &&
              <div className="form-group d-flex ml-auto mb-0">
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-outline-secondary add-player" type="button" onClick={() => this.addPlayerToList()}>
                      <span className="fa fa-check" aria-hidden="true" />
                    </button>
                  </span>
                  <select className="form-control" value={this.state.data.position} onChange={this.onChange} name="position" id='playerPosition'>
                    <option value='obojetnie'>obojetnie</option>
                    <option value='atak'>atak</option>
                    <option value='obrona'>obrona</option>
                  </select>
                </div>
              </div>
            }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
};

const mapDispatchToProps = {
  setNeedToSaveState,
  addplayerToGame
}

export default connect( mapStateToProps, mapDispatchToProps )(AddableSinglePlayer);
