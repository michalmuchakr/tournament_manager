import React, {Component} from 'react';
import SingleTeam from './single_team';

class TeamsList extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.teams.map((team, index) => {
          return <SingleTeam key={index} team={team} allplayers={this.props.allplayers} />
        })}
      </ul>
    );
  }
};

export default TeamsList;
