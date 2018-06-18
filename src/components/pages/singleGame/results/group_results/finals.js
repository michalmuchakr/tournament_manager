import React from 'react';
import SemiFinalContent from "./final_content";

const Finals = () => (
  <React.Fragment>
    <div className='card-header' role='tab'>
      <h5 className='mb-0'>
        <a className='d-flex justify-content-between' data-toggle='collapse' data-parent='#accordion'
          href='#finals' aria-expanded='false'>
          <span className='group'>Semi Finals</span>
        </a>
      </h5>
    </div>
    <SemiFinalContent />
  </React.Fragment>
);

export default Finals;
