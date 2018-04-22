import React, { Component } from 'react';
import ResultSingleTable from './result_single_table';
import GroupResultTab from './group_results/group_result_tab';
import Summary from '../sidebar/tournament_summary/summary';

class ResultGameType extends Component {
  render() {
    return (
      <div className="game-type">
        <Summary />
        <div className="results">
          {this.props.game.settings[0].gameType === 'liga'
            ? <ResultSingleTable
                game={this.props.game} />
            : <GroupResultTab 
                game={this.props.game} />
          }
        </div>
      </div>
    );
  }
}

export default ResultGameType;
