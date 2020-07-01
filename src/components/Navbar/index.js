import React, { useState } from 'react';
import ClassNames from 'classnames';
import MenuButton from '../MenuButton';
import { NavLink } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import './style.scss';

const Navbar = ({ t }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='navbar-wrapper'>
      <div className='header-content clearfix'>
        <div className='text-logo'>
          <NavLink exact to='/'>
            <div className='logo-symbol'>X</div>
            <div className='logo-text'>
              Xuan's <span>CV</span>
            </div>
          </NavLink>
        </div>
        <div
          className={ClassNames(
            'site-nav',
            { 'mobile-menu-hide': !toggle },
            { 'mobile-menu-show': toggle }
          )}
        >
          <ul className='site-main-menu'>
            <li>
              <NavLink
                exact
                to='/'
                onClick={() => {
                  setToggle(false);
                }}
              >
                {t('about')}
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/resume'
                onClick={() => {
                  setToggle(false);
                }}
              >
                {t('resume')}
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/contact'
                onClick={() => {
                  setToggle(false);
                }}
              >
                {t('contact')}
              </NavLink>
            </li>
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </div>
        <div
          className='menu-toggle mobile-visible'
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <MenuButton toggle={toggle} />
        </div>
      </div>
    </div>
  );
};

export default withNamespaces('nav')(Navbar);
