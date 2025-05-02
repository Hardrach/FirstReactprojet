import React from 'react';
import './DarkModeToggle.css'

const DarkModeToggle = ({ toggle, darkMode }) => (
  <button className="dark-toggle" onClick={toggle}>
    {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
  </button>
);

export default DarkModeToggle;