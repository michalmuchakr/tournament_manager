import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleTeamFinals from './single_team_finals';

class SingleFinal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    console.log()
  }

  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          {this.props.match.map((team, _idx) => {
            return <SingleTeamFinals team={team} key={_idx} />
          })
          }
        </div>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.singleGame[0]
  }
};

export default connect(mapStateToProps)(SingleFinal);
