import React, { Component } from 'react';
import BarExample from './charts/chart';
import LineExample from './charts/line_example';

import { Translate } from 'react-redux-i18n';

class Home extends Component {
  render() {
    return (
      <div className="home-page col-12">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 className='text-center mt-3'>
              <Translate value="home.mainHeader" />
            </h1>
            <h2 className='text-center mt-3'>
              <Translate value="home.subheader" />
            </h2>
          </div>
          <div className="col-10 m-auto mt-4">
            <div className="row">
              <div className="col-6 mt-4">
                <BarExample />
              </div>
              <div className="col-6 mt-4">
                <LineExample />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
