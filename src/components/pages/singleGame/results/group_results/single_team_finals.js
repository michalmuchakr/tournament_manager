import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlayerIdToName } from 'controllers/player_id_to_name';

class SingleTeamFinals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: []
    }
  };

  componentDidMount() {
    this.getNamesOfPlayers(this.props.team)
  };

  getNamesOfPlayers = (players) => {
    const team = players.map((id) => {
      return PlayerIdToName.getName(id, this.props.allplayers);
    });
    this.setState({ team });
    return true;
  };

  render() {
    return (
      <React.fragment>
        <div className="col-8">
          <div className="col-12"> player 1 - {this.state.team[0]} </div>
          <div className="col-12"> player 2 - {this.state.team[1]} </div>
        </div>
        <div className="col-4">
          result insert
        </div>
      </React.fragment>
    );
  }
};

function mapStateToProps(state) {
  return {
    allplayers: state.players.playersList
  }
};

export default connect(mapStateToProps)(SingleTeamFinals);
