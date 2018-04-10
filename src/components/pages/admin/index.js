import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Message from 'components/messages/message';

class Admin extends Component {
  render() {
    return (
      <div className="admin">
      <h1>Admin</h1>
      {this.props.currentUser
        ? <Message mgsRole='success' mgs='you got acces' />
        : <Redirect to="/" />
      }
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Admin);
