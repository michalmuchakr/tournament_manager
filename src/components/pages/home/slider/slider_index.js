import React from 'react';

const HomeSlider = () => (
  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={require('images/stadion_0.jpg')} className='w-100' alt='tournament img' />
      </div>
      <div className="carousel-item">
        <img src={require('images/stadion.jpg')} className='w-100' alt='tournament img' />
      </div>
      <div className="carousel-item">
        <img src={require('images/real_madryt.jpg')} className='w-100' alt='tournament img'/>
      </div>
      <div className="carousel-item">
        <img src={require('images/stadion_2.jpg')} className='w-100' alt='tournament img'/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default HomeSlider;