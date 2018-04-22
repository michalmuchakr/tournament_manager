import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleMatch from '../single_match';

class GroupTabContent extends Component {
  render() {
    const link = `group${this.props.index}`;
    return (
      <div className={"tab-pane " + (this.props.active ? 'active' : null)}
           id={link} role="tabpanel">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Team #1</th>
              <th>Team #2</th>
              <th>Result</th>
              <th>edit</th>
            </tr>
          </thead>
          <tbody>
            {this.props.group.map((match, index) => {
              return <SingleMatch 
                        key={index}
                        match={match}
                        gameId = {this.props.gameId}
                        index={index}
                        results = {this.props.groupResults} />
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameId: state.singleGame[0]._id,
    groupResults: state.singleGame[0].results,
    groupTimetable: state.singleGame[0].groupTimetable
  }
};

export default connect( mapStateToProps )(GroupTabContent);
