import React from 'react';

const BottomLeftPosts = () => (
  <div className="card-columns">
    <div className="card">
      <img src={require('images/webdesign.jpg')} className='w-100' alt='tournament img' />
      <div className="card-body">
        <h5 className="card-title">Card title that wraps to a new line</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    <div className="card p-3">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </div>
    <div className="card">
      <img src={require('images/webdesign.jpg')} className='w-100' alt='tournament img' />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card bg-primary text-white text-center p-3">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
    </div>
    <div className="card text-center">
      <div className="card-body">
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card">
      <img src={require('images/webdesign.jpg')} className='w-100' alt='tournament img' />
    </div>
    <div className="card p-3 text-right">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </div>
    <div className="card">
      <div className="card-body">
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
);

export default BottomLeftPosts;