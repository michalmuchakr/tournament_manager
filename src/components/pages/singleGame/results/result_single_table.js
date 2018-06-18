import React, { Component } from 'react';
import SingleResult from './single_result';
import { connect } from 'react-redux';
import _ from 'lodash';

class ResultSingleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  };

  componentDidMount() {
    this.getCurrentResult(this.props.game.results);
  }

  componentWillReceiveProps(nextProps) {
    this.getCurrentResult(nextProps.game.results);
  }

  getCurrentResult = (results) => {
    let resultsToShow =  _.filter(results, (o) => { return o.points > -1 });
    resultsToShow = _.orderBy(resultsToShow, ['points'], ['desc']);

    this.setState({ results: resultsToShow });
  }

  render() {
    return (
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
          {this.state.results.map((result, index) => {
            return <SingleResult 
                      key={index} 
                      result={result} 
                      allplayers={this.props.allplayers} 
                      allteams={this.props.game.teams} 
                      index={index} />
            })
          }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    allplayers: state.players.playersList
  }
};

export default connect( mapStateToProps )(ResultSingleTable);
