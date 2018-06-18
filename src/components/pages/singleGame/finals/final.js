import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleFinalMatch from './single_final_match';
import FinalTabHeader from './final_tab_header';
import { saveFinalResult } from 'actions/finals';

class Final extends Component {
  render() {
    return (
      <React.Fragment>
        <FinalTabHeader name="Final" />
        <SingleFinalMatch
          gameId={ this.props.gameId }
          match={ this.props.final }
          index={0}
          currentUser={ this.props.currentUser }
          saveResult={ this.props.saveFinalResult }  />
      </React.Fragment> 
    )
  }
}

const mapStateToProps = (state) => ({
  final: state.singleGame[0].finals,
  gameId: state.singleGame[0]._id,
  currentUser: state.auth.currentUser,
})

const mapDispatchToProps = {
  saveFinalResult
}


export default connect(mapStateToProps, mapDispatchToProps)(Final);
