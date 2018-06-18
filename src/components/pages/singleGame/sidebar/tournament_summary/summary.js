import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { ResultSortHandler } from 'controllers/result_sort_handler';
import { FinalsHandler } from 'controllers/finals_handler';
import { saveSemiFinals } from "actions/";
import { 
  saveFinal,
  saveTournamentWinners } from "actions/finals";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    }
  };
  
  componentDidMount() {
    this.sortAndGroupResults(this.props.groupResults);
  }

  componentWillReceiveProps(nextProps) {
    this.sortAndGroupResults(nextProps.groupResults);
  }

  sortAndGroupResults = (res) => {
    let results = ResultSortHandler.sortGroupResults(res);
    this.setState({ results });
  }

  handleSemiFinals() {
    let semiFinals = {
          semiFinals: FinalsHandler.generateSemiFinals(this.state.results),
        }
      
    this.props.saveSemiFinals(semiFinals, this.props.gameId);
  }

  handleFinals() {
    let final = {
      teams: FinalsHandler.getFinalMatch(this.props.semiFinals),
    }

    this.props.saveFinal(final, this.props.gameId);
  }

  finishTournament() {
    let winner = FinalsHandler.getWinners(this.props.finals);
    this.props.saveTournamentWinners(winner, this.props.gameId);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button 
              type="button" className="btn btn-outline-secondary" 
              onClick={this.handleSemiFinals.bind(this)}>
              <Translate value='single_game.result_handler.finish' />
            </button>
            <button 
              type="button" className="btn btn-outline-secondary"
              onClick={this.handleFinals.bind(this)}>
                Finish Semi Finals
            </button>
            <button type="button" className="btn btn-outline-secondary"
              onClick={this.finishTournament.bind(this)} >
              Finish Finals
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gameId: state.singleGame[0]._id,
  groupResults: state.singleGame[0].results,
  semiFinals: state.singleGame[0].semiFinals,
  finals: state.singleGame[0].finals,
});

const mapDispatchToProps = {
  saveSemiFinals,
  saveFinal,
  saveTournamentWinners,
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
