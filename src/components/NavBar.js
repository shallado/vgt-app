import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountMenu from './AccountMenu';
import SearchVideo from './SearchVideo';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar__links-primary">
      <img src="img/logo.png" alt="company logo" className="navbar__logo"></img>
      <ul>
        <li>
          <NavLink to="/browse" exact={true}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/browse/nintendo">Nintendo</NavLink>
        </li>
        <li>
          <NavLink to="browse/playstation">PlayStation</NavLink>
        </li>
        <li>
          <NavLink to="browse/xbox">Xbox</NavLink>
        </li>
        <li>
          <NavLink to="browse/pc">PC</NavLink>
        </li>
        <li>
          <NavLink to="/my-list">My List</NavLink>
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