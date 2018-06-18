import React, { Component } from 'react';

// import { Translate } from 'react-redux-i18n';
import HomeSlider from './home/slider/slider_index';
import HomePosts from './home/posts/posts_index';
import BottomLeftPosts from './home/posts/bottom_left';
import BottomSidebar from './home/bottom_sidebar';

import 'styles/home.css';

class Home extends Component {
  render() {
    return (
      <div className="col-11 mx-auto mt-5 home_page">
        <div className="row">
          <div className="col-6">
            <HomeSlider />
          </div>
          <div className="col-6">
            <HomePosts />
          </div>
        </div>
        <div className="col-12 px-0 mt-4">
          <div className="card-deck">
            <div className="card">
              <img src={require('images/bitcoin.jpg')} className='w-100' alt='tournament img' />
              <div className="card-body">
                <h5 className="card-title">KekeCoins</h5>
                <p className="card-text">Czy nowa kryptowaluta podbije świat kryptowalut</p>
                <p className="card-text date-stamp"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img src={require('images/real_madryt.jpg')} className='w-100' alt='tournament img' />
              <div className="card-body">
                <h5 className="card-title">Real Madryt wygrywa ligę mistrzów</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text date-stamp"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img src={require('images/artificial_intelligence.jpg')} className='w-100' alt='tournament img' />
              <div className="card-body">
                <h5 className="card-title">Artificial Intelligence w Krakowie</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text date-stamp"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card">
              <img src={require('images/slide_1.jpg')} className='w-100' alt='tournament img' />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text date-stamp"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 px-0 mt-4 bottom_left">
          <div className="row">
            <div className="col-8">
              <BottomLeftPosts />
            </div>
            <div className="col-4">
              <BottomSidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
