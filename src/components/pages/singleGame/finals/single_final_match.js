import React, { Component } from 'react';
import SingleFinalTeam from './single_final_team';
import EditResultSection from 'components/shared/edit_result_section';
import EditBtnsSection from 'components/shared/edit_btns_section';
import _ from 'lodash';

export default class SingleFinalMatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: this.props.results,
      result: {
        team1: this.props.match.result[0] || 0,
        team2: this.props.match.result[1] || 0
      },
      editing: false,
      validSave: false,
      _id: this.props.match._id
    }
  }

  setResult(results) {
    this.setState({
      ...this.state,
      results 
    })
  };

  editClicked = () => {
    this.setState({
      ...this.state,
      editing: !this.state.editing
    })
  };

  staticResult = () => {
    return this.state.result[0] + ' : ' + this.state.result[1]
  };

  resultChange = e => {
    this.setState({
      ...this.state,
      result: {
        ...this.state.result,
        [e.target.name]: parseInt(e.target.value, 10)
      }
    }, 
    () => { this.saveValidation() });
  };

  saveValidation() {
    let result = _.values(this.state.result),
        hasWinner = _.includes(result, 10),
        sameResultBeforeAfterChange = _.isEqual(result, this.props.match.result),
        isDraw = !_.without(result, result[0]).length;

    if(hasWinner && !sameResultBeforeAfterChange && !isDraw) {
      this.setValidState(true)
    } else {
      this.setValidState(false)
    };
  };
  
  setValidState = (validSave) => {
    this.setState({
      validSave
    })
  }
  setEditingForTimeTable = (editing) => {
    this.setState({ editing });
  }
  saveResult = () => {
    this.setEditingForTimeTable(false);
    let data = {
      result: [
        this.state.result.team1,
        this.state.result.team2,
      ],
      _id: this.state._id,
    }

    this.props.saveSemiFinalResult(data, this.props.gameId);

    this.setState({
      ...this.state,
      validSave: false,
      editing: false,
    })
  }

  cancel = () => {
    this.setEditingForTimeTable(false);
    this.setState({
      ...this.state,
      editing: false,
      result: {
        team1: this.props.match.result[0] || 0,
        team2: this.props.match.result[1] || 0
      }
    })
  }

  render() {
    let {
      result,
      editing,
      validSave,
    } = this.state;
    return (
      <tr>
        <td>
          { this.props.index + 1 }
        </td>
          {this.props.match.teams.map( (team, index) => {
            return <SingleFinalTeam team={ team } key={ index } />
          })
        }
        <EditResultSection 
          currentUser={this.props.currentUser}
          editing={editing}
          result={result} 
          resultChange={this.resultChange} />
        <EditBtnsSection
          currentUser={ this.props.currentUser }
          editing={ editing }
          validSave={ validSave }
          waitingForTimeTable={ false }
          saveResult={this.saveResult}
          cancel={this.cancel}
          editClicked={this.editClicked} />
      </tr>
    )
  }
}


