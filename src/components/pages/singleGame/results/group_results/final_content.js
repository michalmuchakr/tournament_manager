import React, { Component } from 'react';
import SingleFinal from './single_final';

import { connect } from 'react-redux';

class SemiFinalContent extends Component {
  render() {
    return (
      <div id='finals' className="collapse" role="tabpanel" aria-labelledby="semi final tab">
        <ul className="list-group">
          {this.props.semi_finals.matches.map((match, index) => {
            return <SingleFinal match={match} key={index}/>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  saveSemiFinals: state.singleGame[0].saveSemiFinals
});

export default connect(mapStateToProps)(SemiFinalContent);
