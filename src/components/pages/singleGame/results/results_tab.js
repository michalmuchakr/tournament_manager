import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Message from 'components/messages/message';
import ResultGameType from './result_game_type';

class ResultTab extends Component {
  constructor(props) {
    super();
    this.state = {
      results: []
    }
  };
  
  componentWillReceiveProps(nextProps) {
    this.getCurrentResult(nextProps.game.results);
  }

  componentDidMount() {
    this.getCurrentResult(this.props.game.results);
  }

  getCurrentResult = (results) => {
    let resultsToShow =  _.filter(results, (o) => { return o.points > -1 });
    resultsToShow = _.orderBy(resultsToShow, ['points'], ['desc']);

    this.setState({ results: resultsToShow });
  }

  render() {
    return (
      <div className="tab-pane" id="results" role="tabpanel">
        {this.props.game.results
          ? <ResultGameType game={this.props.game} />
          : <Message mgsRole='danger' mgs='no results' />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.singleGame[0]
  }
};

export default connect( mapStateToProps )(ResultTab);
