import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SingleGameController } from 'controllers/single_game';
import GameTabsNav from './game_tabs_nav';
import TimeTableTab from './time_table/time_table_tab';
import TeamsTab from './teams/teams_tab';
import PlayersTab from './players_in_game/players_tab';
import InfoTab from './info_tab/info_tab_index';
import FinalsTab from './finals/finals_tab';

class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionsCounter: {},
    }
  };

  componentWillMount() {
    this.setPlayerCaouter(this.props.game.players);
  };

  componentWillReceiveProps = (nextProps) => {
    this.setPlayerCaouter(nextProps.game.players);
  };

  setPlayerCaouter = (positions) => {
    this.setState({ 
      positionsCounter: SingleGameController.countPositions(positions) 
    });
  };

  render() {
    return (
      <div className="gameInfo col-7 card mb-3 px-0">
        <div className="card-body py-0">
          <GameTabsNav game={ this.props.game }/>
          <div className="tab-content">
            <InfoTab name={this.props.game.name} description={this.props.game.description} tournamentDat={this.props.game.tournamentDat}/>
            <PlayersTab positionsCounter={this.state.positionsCounter} />
            <TeamsTab positionsCounter={this.state.positionsCounter} />
            <TimeTableTab />
            {this.props.game.semiFinals &&
              <FinalsTab />
            }
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    game: state.singleGame[0]
  }
};

export default connect( mapStateToProps )(GameInfo);
