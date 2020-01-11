import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <div className="nav-icon">
        <img src="/icons/nav-icon.svg" alt="more" />
      </div>
      <div className="title">Piskel Clone</div>
      <div className="menu-icon">
        <img src="/icons/menu-icon.svg" alt="menu icon" />
      </div>
    </div>
  );
}

export default Header;
