import React from 'react';
import AccountMenu from './AccountMenu';
import SearchVideo from './SearchVideo';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar__links-primary">
      <img src="img/logo.png" alt="company logo" className="navbar__logo"></img>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Nintendo</a>
        </li>
        <li>
          <a href="#">Playstation</a>
        </li>
        <li>
          <a href="#">Xbox</a>
        </li>
        <li>
          <a href="#">PC</a>
        </li>
        <li>
          <a href="#">My list</a>
        </li>
      </ul>
    </div>
    <div className="navbar__links-secondary">
      <SearchVideo />
      <AccountMenu />
    </div>
  </nav>
);

export default NavBar;