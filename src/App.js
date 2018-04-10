import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Nav from 'components/shared/nav';
import Footer from 'components/shared/footer';

import Home from 'components/pages/home';
import Games from 'components/pages/games';
import GamePage from 'components/pages/game_page';
import Players from 'components/pages/players';
import LogOut from 'components/pages/logout';
import Admin from 'components/pages/admin/index';
import Page404 from 'components/shared/page404';

import 'styles/common.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/games' component={Games} />
            <Route path='/players' component={Players} />
            <Route path='/games/:id' component={GamePage} />
            <Route path='/logout' component={LogOut} />
            <Route path='/admin' component={Admin} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
};

export default App;
