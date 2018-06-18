import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from 'components/messages/message';
import { SingleGameController } from 'controllers/single_game';
import AddablePlayersList from './addable_players_list';
import ResultTab from '../results/results_tab';

class AddablePlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableToAdd: []
    }
  };
  
  componentDidMount = () => {
    if (!this.props.tournamentStarted) {
      this.getAvailableToAdd(this.props.playersInGame)
    }
  }
  
  componentWillReceiveProps = (nextProps) => {
    if (!this.props.tournamentStarted) {
      this.getAvailableToAdd(nextProps.playersInGame);
    }
  }
  
  getAvailableToAdd = (playersInGame) => {
    let availableToAdd = SingleGameController.checkForAvailableToAdd(this.props.allplayers, playersInGame);
    this.setState({
      availableToAdd
    })
  }

  render() {
    return (
      <div className="col-5 sticker sidebar">
        {!this.props.tournamentStarted
          ? <div className="players">
              { this.state.availableToAdd.length > 0
                ? <AddablePlayersList availableToAdd={this.state.availableToAdd} />
                : <Message
                    mgsRole='info' 
                    mgs='No players available to add!' />
              }
            </div>
          : <ResultTab />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allplayers: state.players.playersList,
    playersInGame: state.singleGame[0].players,
    tournamentStarted: state.singleGame[0].tournamentStarted,
  }
};

export default connect( mapStateToProps )(AddablePlayers);
