import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleGame,
         clearSingleGame } from 'actions/';
import { fetchPlayers } from 'actions/players_global';

import Message from 'components/messages/message';
import SideBar from './singleGame/sidebar/sidebar';
import GameInfo from './singleGame/game_info';
import Winners from './singleGame/winners';
import 'styles/gamepage.css';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: this.props.match.params.id,
      wait_fetch_game: true,
      wait_fetch_players: true
    }
  };

  componentDidMount() {
    this.props.fetchSingleGame(this.state.gameId)
      .then(() => this.gameFetched());

    this.props.fetchPlayers()
      .then(() => this.playersFetched());
  }

  gameFetched = () => { this.setState({ wait_fetch_game: false }) };
  playersFetched = () => { this.setState({ wait_fetch_players: false }) };

  componentWillUnmount() {
    this.props.clearSingleGame();
  };

  render() {
    return (
      <div className='col-12 mt-3 mx-auto single_game_page'>

        { !this.state.wait_fetch_players & !this.state.wait_fetch_game
          ? <div className="row align-items-start">
              <Winners />
              <GameInfo />
              <SideBar />
            </div>
          : <div className="row">
              <Message mgsRole='info col-12 px-0 text-center' mgs='waiting!' />
            </div>
        }
      </div>
    );
  };
};

const mapDispatchToProps = {
  fetchSingleGame,
  fetchPlayers,
  clearSingleGame
};

export default connect( null , mapDispatchToProps )(GamePage);
