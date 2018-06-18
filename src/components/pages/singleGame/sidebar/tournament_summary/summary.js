import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { ResultSortHandler } from 'controllers/result_sort_handler';
import { FinalsHandler } from 'controllers/finals_handler';
import { saveSemiFinals } from "actions/";

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

    console.log(final);
    // this.props.saveSemiFinals(final, this.props.gameId);
    
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
            <button type="button" className="btn btn-outline-secondary">Finish Finals</button>
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
});

const mapDispatchToProps = {
  saveSemiFinals
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
