import React from 'react';
import './Style.css';

const Header = () => {
  return (
    <header className="new-header">
      <div className="new-logo">LOGO</div>
      <nav className="new-nav">
        <ul className="new-nav-list">
          <li className="new-nav-item"><a href="#" className="new-nav-link">Home</a></li>
          <li className="new-nav-item"><a href="#" className="new-nav-link">About</a></li>
          <li className="new-nav-item"><a href="#" className="new-nav-link">Portfolio</a></li>
          <li className="new-nav-item"><a href="#" className="new-nav-link">Contact</a></li>
          <li className="new-nav-item"><a href="#" className="new-nav-link">FAQ</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
