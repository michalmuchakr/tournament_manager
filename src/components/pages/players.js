import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers,
         updatePlayer,
         deletePlayer,
         setPlayerToEdit,
         setWaitPlayers } from 'actions/players_global';

import PlayerForm from './players/form';
import PlayersList from './players/players_list';
import AddNewPlayer from './players/players_add_new';
import Message from 'components/messages/message';

class Players extends Component {
  componentDidMount() {
    this.props.setWaitPlayers(true);
    this.props.fetchPlayers();
  };

  editPlayer = (player) => {
    this.props.setPlayerToEdit(player, true);
  }

  newPlayer = () => {
    let editPlayer = {
        id: '',
        name: '',
        last_name: '',
        email: ''
      }
    this.props.setPlayerToEdit(editPlayer, false);
  }

  render() {
    return (
      <div className="page col-11 mt-3 mx-auto">
        <div className='players'>
          <div className="pageHeader mb-3 d-flex justify-content-between align-items-center">
            <h1>
              <span className="fa fa-users mr-3" aria-hidden="true"></span>
              <span>Players</span>
            </h1>
            <div className="ml-auto">
              <AddNewPlayer newPlayer={this.newPlayer}/>
            </div>
          </div>
        </div>

        {!this.props.waitPlayers
          ? <div className="players-list">
              { this.props.players
                ? <PlayersList editPlayer={this.editPlayer} {...this.props} />
                : <Message mgsRole='info' mgs='No players added, yet!' />
              }
              <PlayerForm editHandler = {this.props.editHandler} />
            </div>
          : <Message mgsRole='info' mgs='Proszę o chwile cierpliwości' />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players.playersList,
    waitPlayers: state.players.waitPlayers,
    editHandler: state.players.editHandler
  }
}

const mapDispatchToProps = {
  fetchPlayers,
  updatePlayer,
  deletePlayer,
  setPlayerToEdit,
  setWaitPlayers
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
