import React from 'react'
import { Redirect } from 'react-router-dom'
import { setUser } from 'actions/auth';
import { connect } from 'react-redux';
import clientAuth from './auth/client_auth';

class LogOut extends React.Component {
  logOut() {
    clientAuth.logOut()
    let user = null;
    this.props.setUser(user);
  }

  componentDidMount() {
    this.logOut()
  }
  
  render() {
    return <Redirect to='/' />
  }
}

const mapDispatchToProps = {
  setUser
};

export default connect( null, mapDispatchToProps )(LogOut);
