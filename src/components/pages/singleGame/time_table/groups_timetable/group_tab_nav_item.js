import React, { Component } from 'react';

class GroupTabNavItem extends Component {
  render() {
    const link = `#group${this.props.index}`;
    return (
      <li className="nav-item">
        <a className={"nav-link " + (this.props.active ? 'active' : null)}
            data-toggle="tab" 
            href={link} 
            role="tab" >
            Group {this.props.index}
        </a>
      </li>
    );
  }
}

export default GroupTabNavItem;
