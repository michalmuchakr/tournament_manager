import React from 'react';
import PaginationPage from './pagination_page';

import { I18n } from 'react-redux-i18n';
import { Translate } from 'react-redux-i18n';

function PagesRepeat(props) {
  let items = [],
      end, start;

  props.currentPage - 3 < 0
    ? start = 0
    : start = props.currentPage - 2

  props.currentPage + 3 > props.pagesLength
    ? end = props.pagesLength
    : end = props.currentPage + 3

  for (let i = start; i < end; i++) {
    items.push( props.children(i) );
  }
  return items;
};

const Pagination = ({
        pagesLength,
        currentPage,

        searchRecords,
        changepage,
        prevHandler,
        nextHandler,
        lastHandler,
        firstHandler,
        perPageOnChange,
        breakPoints,
        options
      }) => {

  return (
    <div className="form-inline fancy-pagination d-flex
                    justify-content-end align-items-center
                    mb-1 col-12 px-0" >
      <nav aria-label='Page navigation example text-right'>
        <ul className='pagination mb-0'>
          <li className = { currentPage === 0
                              ? 'page-item disabled'
                              : 'page-item'}
              onClick  =  { currentPage !== 0
                              ? firstHandler.bind(this)
                              : null } >
            <a className = { currentPage === 0
                                ? 'page-link disabled'
                                : 'page-link' } >
              {I18n.t('shared.pagination.first')}
            </a>
          </li>
          <li className = { currentPage === 0
                              ? 'page-item disabled'
                              : 'page-item'}
              onClick  =  { currentPage !== 0
                              ? prevHandler.bind(this)
                              : null } >
            <a className = { currentPage === 0
                                ? 'page-link disabled'
                                : 'page-link' } >
              {I18n.t('shared.pagination.prev')}
            </a>
          </li>
          { currentPage > 2 &&
            <li>
              <a className = 'page-link mx-2' >
                ...
              </a>
            </li>
          }
          <PagesRepeat numTimes={ (pagesLength > options.shortBreak) ? options.shortBreak : pagesLength}
                        currentPage={ currentPage }
                        pagesLength = { pagesLength }
                        breakPoints = { breakPoints } >

            { (index) => <PaginationPage  key={index} changepage={changepage}
                                          pageIndex={index} active={(index === currentPage) ? 'active' : ''} />
                                        }
          </PagesRepeat>
          { currentPage < pagesLength - 3 &&
            <li>
              <a className = 'page-link mx-2' >
                ...
              </a>
            </li>
          }
          <li className={(currentPage === ( pagesLength - 1 )) ? 'page-item disabled' : 'page-item'}
              onClick={
                (currentPage !== ( pagesLength - 1 )) ? nextHandler.bind(this) : null
              }
              >
            <a className={currentPage ===  pagesLength - 1
                           ? 'page-link disabled'
                           : 'page-link'} >
              {I18n.t('shared.pagination.next')}
            </a>
          </li>
          <li className={(currentPage === ( pagesLength - 1 )) ? 'page-item disabled' : 'page-item'}
              onClick={ currentPage !== pagesLength - 1
                          ? lastHandler.bind(this)
                          : null
                      } >
            <a className={(currentPage === ( pagesLength - 1 )) ? 'page-link disabled' : 'page-link'} >
              {I18n.t('shared.pagination.last')}
            </a>
          </li>
        </ul>
      </nav>
      <p className='text-right my-0 ml-3'>
        <Translate value="shared.pagination.ofPages" count={pagesLength} />
      </p>
      <select className='custom-select ml-3'
              name='perPage'
              value={options.perPage}
              onChange={perPageOnChange} >
        <option value='5'>{I18n.t('shared.pagination.itemsPerPage', { count: 5 })}</option>
        <option value='10'>{I18n.t('shared.pagination.itemsPerPage', { count: 10 })}</option>
        <option value='15'>{I18n.t('shared.pagination.itemsPerPage', { count: 15 })}</option>
        <option value='20'>{I18n.t('shared.pagination.itemsPerPage', { count: 20 })}</option>
      </select>
      <input type="text" className="form-control ml-3" placeholder={I18n.t('shared.pagination.searchFor')}
              onChange={ searchRecords.bind(this) }/>
    </div>
  );
};

export default Pagination;
