import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import clientAuth from '../pages/auth/client_auth';
import { setUser } from 'actions/auth';
import LogInRegister from '../pages/auth/login_register';

import { Translate } from 'react-redux-i18n';

class Nav extends Component {
  componentDidMount() {
    let user = clientAuth.getCurrentUser();
    this.props.setUser(user);
  }

  componentWillReceiveProps(nextProps) {
    let currentUser = nextProps.currentUser;
    this.props.setUser(currentUser);
  }

  onLoginSuccess(user) {
    this.props.setUser(user);
  }

  render() {
    return (
      <nav className='navbar navbar-toggleable-sm navbar-inverse bg-inverse'>
        <div className="col-11 m-auto">
          <div className="row d-flex">
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <Link className='navbar-brand' to='/'>
                <Translate value='shared.nav.brand' />
              </Link>
              <button className='navbar-toggler navbar-toggler-right' type='button'
                data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup'
                aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon' />
              </button>
              <ul className='navbar-nav w-100'>
                <li className='nav-item'>
                  <Link
                    className='nav-item nav-link'
                    to='/' >
                    <Translate value="shared.nav.home" />
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-item nav-link'
                    to='/players'>
                    <Translate value="shared.nav.players" />
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-item nav-link'
                    to='/games' >
                    <Translate value="shared.nav.games" />
                  </Link>
                </li>
                <li className='nav-item dropdown ml-auto'>
                  <a className='nav-link dropdown-toggle' href='http://example.com' id='navbarDropdownMenuLink'
                    data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    {this.props.currentUser
                      ? <Translate value='shared.nav.welcomeUser' userName={this.props.currentUser.name} />
                      : <Translate value='shared.nav.userPanel' />
                    }
                  </a>
                  {this.props.currentUser
                    ? <div className='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdownMenuLink'>
                        <Link className='dropdown-item' to='/admin'>
                          <Translate value="shared.nav.adminDashboard" />
                        </Link>
                        <Link className='dropdown-item' to='/logout'>
                          <Translate value="shared.nav.logOut" />
                        </Link>
                      </div>
                    : <div className='dropdown-menu dropdown-menu-right auth p-4' aria-labelledby='navbarDropdownMenuLink'>
                          <LogInRegister setUser={this.props.setUser} clientAuth={this.props.clientAuth}/>
                      </div>
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
};

const mapDispatchToProps = {
  setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
