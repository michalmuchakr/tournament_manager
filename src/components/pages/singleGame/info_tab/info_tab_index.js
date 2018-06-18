import React from 'react';

const InfoTab = ({ name, description, tournamentData }) => (
  <div className="tab-pane active col" id="info_tab" role="tabpanel">
    <img src={require('images/kicker.jpg')} className='w-100' alt='tournament img' />
    <div className="card-header d-flex justify-content-between align-items-end">
      <div className="gameInfo_description">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description} ... </p>
      </div>
      <button className="btn btn-outline-secondary btn-sm gameInfo_read-more p-2 px-3 collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#readMore"
        aria-expanded="false"
        aria-controls="collapseExample" >
        <span className="fa fa-comment-o pr-2" aria-hidden="true"></span> Read more
      </button>
    </div>
    <div className="collapse" id="readMore">
      <div className="card card-block p-3">
        qwe
      </div>
    </div>
  </div>
);

export default InfoTab;