import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNeedToSaveState } from 'actions/';
import { addPlayersToDb } from 'actions/players_in_game';

import Message from 'components/messages/message';
import PlayersList from './players_list';
import CounterDisplay from './components/counter_display';

class PlayersTab extends Component {
  savePlayers = () => {
    let data = {
      'players': this.props.playersinGame
    };
    this.props.addPlayersToDb(data, this.props.gameId);
    this.props.setNeedToSaveState(false);
  }

  render() {
    return (
      <div className="tab-pane" id="players" role="tabpanel">

      <CounterDisplay positions={this.props.positionsCounter} />

      {this.props.playersinGame.length > 0
        ? <PlayersList
            savePlayers = {this.savePlayers}
            needSaved = {this.props.needSaved}
            playersAdded = {this.props.playersinGame}
            allplayers = {this.props.allplayers} 
            tournamentStarted = {this.props.tournamentStarted}/>
        : <Message mgsRole='info m-3' mgs='No players added yet!' />
      }

    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tournamentStarted: state.singleGame[0].tournamentStarted,
    gameId: state.singleGame[0]._id,
    playersinGame: state.singleGame[0].players,
    needSaved: state.singleGame[0].needSaved,
    allplayers: state.players.playersList
  }
};

const mapDispatchToProps = {
  addPlayersToDb,
  setNeedToSaveState
};

export default connect( mapStateToProps, mapDispatchToProps )(PlayersTab);
