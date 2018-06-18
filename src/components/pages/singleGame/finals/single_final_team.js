import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PlayerIdToName } from 'controllers/player_id_to_name';


class SingleFinalTeam extends Component {
  constructor() {
    super();
    this.state = {
      team: [],
      result: [0,0],
      editing: false
    }
  };

  componentDidMount() {
    this.getNamesOfPlayers(this.props.team)
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
      <td>
        <div className='col-12 px-0'>
          { this.state.team[0] }
        </div>
        <div className='col-12 px-0'>
          { this.state.team[1] }
        </div>
      </td>
    )
  }
}


function mapStateToProps(state) {
  return {
    allplayers: state.players.playersList
  }
};

export default connect( mapStateToProps )(SingleFinalTeam);
