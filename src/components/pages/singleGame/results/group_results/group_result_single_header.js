import React, { Component } from 'react';

class GroupResultSingleHeader extends Component {
  render() {
    const link = `#group_${this.props.index}`;
    return (
      <div className='card-header' role='tab'>
        <h5 className='mb-0'>
          <a className='d-flex justify-content-between' data-toggle='collapse' data-parent='#accordion' 
            href={link} aria-expanded='false'>
            <span className='group'>Group {this.props.index}</span>
          </a>
        </h5>
      </div>
    );
  }
}

export default GroupResultSingleHeader;
