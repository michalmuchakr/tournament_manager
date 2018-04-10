import React, {Component} from 'react';
import { PlayerIdToName } from 'controllers/player_id_to_name';

class SingleTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: []
    }
  };

  componentDidMount = () => {
    this.getNamesOfPlayers(this.props.team.players);
    return true;
  };

  componentWillReceiveProps = (nextProps) => {
    this.getNamesOfPlayers(nextProps.team.players);
    return true;
  };

  getNamesOfPlayers = (players) => {
    const team = [];
    
    players.map((id) => {
      team.push(PlayerIdToName.getName(id, this.props.allplayers));
      return true;
    });

    this.setState({ team });
    return true;
  }

  render() {
    return (
      <li className="list-group-item px-3">
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <div className="row">
                {this.state.team[0]}
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                {this.state.team[1]}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
};

export default SingleTeam;
