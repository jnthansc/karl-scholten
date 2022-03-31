import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/Logo.jpg';
import { Link } from 'react-router-dom';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true)
  }

  const closeNav = () => {
    setNavOpen(false)
  }

  return (
    <div className="header">
      <div className="mobile-header">
        <IoIosMenu className="menuBtn" onClick={openNav}></IoIosMenu>
        <Link to="/">
          <img src={logo} className="mobile-logo" alt="logo" />
        </Link>
        <div className={navOpen === true ? 'sidenav active' : 'sidenav'}>
          <IoIosClose className="closebtn" onClick={closeNav}></IoIosClose>
          <Link to="/Anfragen" className="header-navbar-link">ANFRAGEN</Link>
          <Link to="/Arbeiten" className="header-navbar-link">ARBEITEN</Link>
          <Link to="/UeberMich" className="header-navbar-link">ÜBER MICH</Link>
        </div>
      </div>
      <header className="desktop-header">
        <Link to="/">
          <img src={logo} className="header-logo" alt="logo" />
        </Link>
        <nav>
          <ul className="header-navbar-list">
            <li>
              <Link to="/Anfragen" className="header-navbar-link">ANFRAGEN</Link>
            </li>
            <li>
              <Link to="/Arbeiten" className="header-navbar-link">ARBEITEN</Link>
            </li>
            <li>
              <Link to="/UeberMich" className="header-navbar-link">ÜBER MICH</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>

  );
}

export default Header;
