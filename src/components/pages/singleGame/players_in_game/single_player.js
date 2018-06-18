import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlayerIdToName } from 'controllers/player_id_to_name';

import EditPlayerBtns from './components/edit_btns';
import SavePlayerBtns from './components/save_btns';

import { setNeedToSaveState } from 'actions/';
import { removePlayerFromGame, updatePlayer } from 'actions/players_in_game';

class SinglePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: this.props.player.position,
      name: '',
      editing: false
    }
  };

  componentDidMount = () => {
    let name = PlayerIdToName.getName(this.props.player._id, this.props.allplayers);
    this.setState({ name });
  };

  editPosition = () => {
    this.setState({ editing: true })
  }

  cancelEditing = () => {
    this.setState({
      position: this.props.player.position,
      editing: false
    })
  }

  removePlayer = (id) => {
    this.props.removePlayerFromGame(id);
    this.props.setNeedToSaveState(true);
  };

  savePlayer = () => {
    this.props.updatePlayer(this.props.player._id, this.state.position)
    this.setState({ editing: false })
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      position: e.target.value
    })
  }

  render () {
    return (
      <tr>
        <td>
          {this.props.index}
        </td>
        <td>
          {this.state.name}
        </td>
        <td>
          {this.state.editing && !this.props.tournamentStarted
            ? <select className="form-control" name="position" id='playerPosition'
                       value={this.state.position} onChange={this.onChange} >
                <option value='obojetnie'>obojetnie</option>
                <option value='atak'>atak</option>
                <option value='obrona'>obrona</option>
              </select>
            : <span>{this.state.position}</span>
          }
        </td>

        {!this.props.tournamentStarted && this.props.currentUser &&
          <td>
            <div className="saveBtns">
              {this.state.editing
                ? <SavePlayerBtns
                    savePlayer={this.savePlayer}
                    cancelEditing={this.cancelEditing}
                    player={this.props.player} />
                : <EditPlayerBtns
                    editPosition={this.editPosition}
                    removePlayer={this.removePlayer}
                    player={this.props.player} />
              }
            </div>
          </td>
        }
      </tr>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
};

const mapDispatchToProps = {
  removePlayerFromGame,
  updatePlayer,
  setNeedToSaveState,
};

export default connect( mapStateToProps , mapDispatchToProps )(SinglePlayer);
