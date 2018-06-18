import React from 'react';

const TabNav = ({ navFor }) => {
  return (
    <ul className="nav nav-tabs mx-3 mt-3" role="tablist">
      <li className="nav-item">
        <a className="nav-link active" data-toggle="tab" href='#time-table-A' role="tab">Group A</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#time-table-B" role="tab">Group B</a>
      </li>
    </ul>
  );
};

export default TabNav;
