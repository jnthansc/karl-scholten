import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/Logo.jpg';
import { Link } from 'react-router-dom';

function Header() {
  const [isShown, setIsShown] = useState(false);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header-logo" alt="logo" />
      </Link>
      <nav>
        <ul className="header-navbar-list">
          <li>
            <h6>
              <Link to="/Anfragen" className="header-navbar-link">ANFRAGEN</Link>
            </h6>
          </li>
          <li  onMouseEnter={() => {setIsShown(true)}} onMouseLeave={() => {setIsShown(false)}}>
            <h6 className="work">
              ARBEITEN
            </h6>
            {isShown && (
              <div className="header-work-submenu">
                <h6 className="projects">
                  <Link to="/EigeneArbeiten" className="header-navbar-link">EIGENE ARBEITEN</Link>
                </h6>
                <h6 className="jobs">
                  <Link to="/Auftraege" className="header-navbar-link">AUFTRÄGE</Link>
                </h6>
              </div>
            )}
          </li>
          <li>
            <h6>
              <Link to="/UeberMich" className="header-navbar-link">ÜBER MICH</Link>
            </h6>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
