import React from 'react';
import {
  Link
} from 'react-router-dom';
import { Translate } from 'react-redux-i18n';

const SocialNav = () => (
  <div className='social-nav col-12'>
    <div className='row'>
      <div className='col-lg-11 m-auto d-flex'>
        <Link className='navbar-brand' to='/'>
          <span className="fa fa-cubes mr-3" aria-hidden="true"></span>
          <Translate value='shared.nav.brand' />
        </Link>
        <div className='col-2 ml-auto'>
          <div className='row'>
            <div className='col px-0'>
              <a className='w-100 d-flex justify-content-center align-items-center' href='https://www.facebook.com/railwaymen.software.development/'>
                <span className='fa fa-facebook-official' aria-hidden='true' />
              </a>
            </div>
            <div className='col px-0'>
              <a className='w-100 d-flex justify-content-center align-items-center' href='https://www.linkedin.com/company/railwaymen/'>
                <span className='fa fa-linkedin' aria-hidden='true' />
              </a>
            </div>
            <div className='col px-0'>
              <a className='w-100 d-flex justify-content-center align-items-center' href='https://plus.google.com/114314728848174956009'>
                <span className='fa fa-google-plus' aria-hidden='true' />
              </a>
            </div>
            <div className='col px-0'>
              <a className='w-100 d-flex justify-content-center align-items-center' href='https://www.youtube.com/channel/UCu5v1NuohjsTZXGV4K60KWA'>
                <span className='fa fa-youtube' aria-hidden='true' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SocialNav;