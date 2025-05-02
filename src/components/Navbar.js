import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">🌍 Weather & Gallery</Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><Link to="/">🌍 Weather & Gallery</Link></li>
          <li><Link to="/apropos">À propos</Link></li>
        </ul>
        <div className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;