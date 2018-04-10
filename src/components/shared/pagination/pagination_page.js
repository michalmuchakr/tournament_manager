import React from 'react';
const PaginationPage = ({pageIndex, active, changepage}) => {

  return (
    <li className={ "page-item " + active } 
        onClick={ () => changepage( pageIndex ) } 
        data-page={ pageIndex } >
      <a className="page-link">
        { pageIndex + 1 }
      </a>
    </li>
  );
};

export default PaginationPage;
