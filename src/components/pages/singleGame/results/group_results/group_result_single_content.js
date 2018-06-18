import React, { Component } from 'react';
import SingleResult from '../single_result';
import { connect } from 'react-redux';

class GroupResultSingleContent extends Component {
  render() {
    const link = `group_${this.props.index}`;

    return (
      <div id={link} className="collapse" role="tabpanel" aria-labelledby="headingOne">
        <div className="card-block">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Team</th>
                <th>Scored | Loosed</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {this.props.group.map((result, index) => {
                return <SingleResult key={index} 
                                      result={result} 
                                      allplayers={this.props.allplayers} 
                                      allteams={this.props.game.teams} 
                                      index={index} />
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allplayers: state.players.playersList
  }
};

export default connect( mapStateToProps )(GroupResultSingleContent);
