import React, { Component } from 'react';
import { PlayerIdToName } from 'controllers/player_id_to_name';
import { connect } from 'react-redux';
import _ from 'lodash';

class SingleTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: []
    }
  };

  componentDidMount = () => {
    let playersInTeam = this.getTeamPlayersId(this.props.team);
    this.getNamesOfPlayers(playersInTeam);
  };
  
  getTeamPlayersId = (team) => {
    return _.find(this.props.allTeams, { '_id': team }).players;
  };

  getNamesOfPlayers = (players) => {
    const team = [];

    players.map((id) => {
      team.push(PlayerIdToName.getName(id, this.props.allplayers));
      return true;
    });

    this.setState({ team });
    return true;
  };

  render() {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12 px-0">{this.state.team[0]}</div>
          <div className="col-12 px-0">{this.state.team[1]}</div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    allTeams: state.singleGame[0].teams,
    allplayers: state.players.playersList
  }
};

export default connect( mapStateToProps )(SingleTeam);
