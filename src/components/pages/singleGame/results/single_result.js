import React, { Component } from 'react';
import _ from 'lodash';
import { PlayerIdToName } from 'controllers/player_id_to_name';
class SingleResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      points: 0,
      goals: {
        scored: 0,
        loosed: 0
      }
    }
  };

  componentDidMount = () => {
    let arrayOfPlayers = this.getTeamPlayersId(this.props.result._id);
    this.getNamesOfPlayers(arrayOfPlayers);

    if (this.props.result.goals) {
      this.setScoredGoals(this.props.result.goals, this.props.result.points);
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.result.goals !== this.state.goals || nextProps.result.points !== this.state.points) {
      return true;
    }
    return false;
  };

  componentWillReceiveProps = (nextProps) => {
    this.getNamesOfPlayers(this.getTeamPlayersId(nextProps.result._id));
    if (nextProps.result.goals) {
      this.setScoredGoals(nextProps.result.goals, nextProps.result.points)
    }
  };

  setScoredGoals = (goals, points) => {
    this.setState({
      goals: {
        scored: goals[0],
        loosed: goals[1]
      },
      points
    })
  };

  getTeamPlayersId = (teamId) => {
    return _.find(this.props.allteams, { '_id': teamId }).players;
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
      <tr>
        <td>
          {this.props.index + 1}
        </td>
        <td>
          <div className="col-12">
            <div className="row">
              <div className="col-12">{this.state.team[0]}</div>
              <div className="col-12">{this.state.team[1]}</div>
            </div>
          </div>
        </td>
        <td>
          {this.state.goals.scored} | {this.state.goals.loosed}
        </td>
        <td>
          {this.state.points}
        </td>
      </tr>

    );
  }
}

export default SingleResult;
