import React, { Component } from 'react';
import ResultTab from '../results/results_tab';
import TimeTableTab from '../time_table/time_table_tab';

class TournamentManagment extends Component {
  render() {
    return (
      <div className="card">
        <TimeTableTab />
        <ResultTab />
      </div>
    );
  }
}

export default TournamentManagment;
