import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SingleGameController } from 'controllers/single_game';
import GameTabsNav from './game_tabs_nav';
import TimeTableTab from './time_table/time_table_tab';
import TeamsTab from './teams/teams_tab';
import PlayersTab from './players_in_game/players_tab';

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
      <div className="gameInfo col-6 card mb-3 px-0">
        <img src={require('images/kicker.jpg')} className='w-100' alt='tournament img'/>
        <div className="card-header d-flex justify-content-between align-items-end">
          <div className="gameInfo_description">
            <h4 className="card-title">{this.props.game.name}</h4>
            <p className="card-text">{this.props.game.description.slice(0,50)} ... </p>
          </div>
          <button className="btn btn-outline-secondary btn-sm gameInfo_read-more p-2 px-3 collapsed"
              type="button" 
              data-toggle="collapse" 
              data-target="#readMore" 
              aria-expanded="false" 
              aria-controls="collapseExample" >
            <i className="fa fa-comment-o pr-2"  aria-hidden="true"></i> Read more {this.props.game.tournamentData.slice(0,10)}
          </button>
        </div>
        <div className="collapse" id="readMore">
          <div className="card card-block p-3">
            {this.props.game.description}
          </div>
        </div>
        <div className="card-body">
          <GameTabsNav />
          <div className="tab-content">
            <PlayersTab positionsCounter={this.state.positionsCounter} />
            <TeamsTab positionsCounter={this.state.positionsCounter} />
            <TimeTableTab />
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
