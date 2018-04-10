import React, { Component } from 'react';

class EditResult extends Component {
  buildOptions = () => {
    let arr = [];
    for (let i = 0; i <= 10; i++) {
      arr.push(<option key={i} value={i}>{i}</option>)
    }
    return arr;
  }
  render() {
    return (
      <div className="form-group d-flex">
        <select value={this.props.result.team1} className="custom-select form-control" name = 'team1' onChange = {this.props.resultChange}>
          {this.buildOptions()}
        </select>
        <select value={this.props.result.team2} name = 'team2' className="custom-select form-control" onChange = {this.props.resultChange}>
          {this.buildOptions()}
        </select>
      </div>
    );
  }
}

export default EditResult;
