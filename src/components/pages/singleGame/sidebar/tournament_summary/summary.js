import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { ResultSortHandler } from 'controllers/result_sort_handler';
import { FinalsHandler } from 'controllers/finals_handler';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
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

  handleSummary() {
    FinalsHandler.generateSemiFinals(this.state.results);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <button type="button" className="btn btn-outline-secondary" onClick={this.handleSummary.bind(this)}>
            <Translate value='single_game.result_handler.finish' />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  groupResults: state.singleGame[0].results,
});

export default connect(mapStateToProps)(Summary);
