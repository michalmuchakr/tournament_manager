import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleMatch from '../single_match';

class LeagueTimeTableList extends Component {
  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th className="narrow">Team #1</th>
            <th className="narrow">Team #2</th>
            <th>Result</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          {this.props.timetable.map((match, index) => {
            return <SingleMatch 
                      key={match._id} 
                      match={match} 
                      gameId = {this.props.gameId} 
                      index={index} 
                      results = {this.props.results} />
            })
          }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameId: state.singleGame[0]._id,
    results: state.singleGame[0].results,
    timetable: state.singleGame[0].timetable
  }
};

export default connect( mapStateToProps )(LeagueTimeTableList);
