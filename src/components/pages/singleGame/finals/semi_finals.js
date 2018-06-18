import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleFinalMatch from './single_final_match';
import { saveSemiFinalResult } from 'actions/finals'

class SemiFinals extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td colSpan="5">
            <span>Semi Finals</span>
          </td>
        </tr>
        { this.props.semiFinals.map((match, index) => {
            return <SingleFinalMatch
                      gameId={ this.props.gameId }
                      key={ index }
                      match={ match }
                      index={ index }
                      currentUser={ this.props.currentUser }
                      saveSemiFinalResult={ this.props.saveSemiFinalResult } />
          })
        }
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  saveSemiFinalResult
}

const mapStateToProps = (state) => {
  return {
    gameId: state.singleGame[0]._id,
    semiFinals: state.singleGame[0].semiFinals,
    currentUser: state.auth.currentUser,
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(SemiFinals);
