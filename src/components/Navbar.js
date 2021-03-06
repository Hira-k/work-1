import React, { useState, useEffect } from 'react';
import logo from './assets/Jsssl.png';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo'>
            <img src={logo} alt='JSSSL' />
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a
                href='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Training School
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Our Clients
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Careers
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                News & Events
              </a>
            </li>

            <li>
              <a
                href='/contactus'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
