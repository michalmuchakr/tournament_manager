import React, { Component } from 'react';
import { connect } from 'react-redux';

import GroupResultSingleHeader from './group_result_single_header';
import GroupResultSingleContent from './group_result_single_content';
import { ResultSortHandler } from 'controllers/result_sort_handler';

class GroupResultTab extends Component {
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

  render() {
    return (
      <div id="accordion" role="tablist" aria-multiselectable="true">
        {this.state.results.map((group, index) => {
            return  <div className="card" key={index}>
                      <GroupResultSingleHeader group={group} index={index} />
                      <GroupResultSingleContent group={group} index={index} game={this.props.game} />
                    </div>
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groupResults: state.singleGame[0].results,
    game: state.singleGame[0]
  }
};

export default connect( mapStateToProps )(GroupResultTab);
