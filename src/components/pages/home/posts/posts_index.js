import React from 'react';

const HomePosts = () => (
  <React.Fragment >
    <div className="card-deck">
      <div className="card">
        <img src={require('images/abstract.jpg')} className='w-100' alt='tournament img' />
        <div className="card-body">
          <h5 className="card-title">Last Tournament 2017</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text date-stamp"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <img src={require('images/webdesign.jpg')} className='w-100' alt='tournament img' />
        <div className="card-body">
          <h5 className="card-title">How to manage</h5>
          <p className="card-text">This card has supporting text you can find as an additional help.</p>
          <p className="card-text">Here you can find more answers.</p>
          <p className="card-text date-stamp"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default HomePosts;
