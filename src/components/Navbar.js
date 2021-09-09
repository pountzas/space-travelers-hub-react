import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const Navbar = () => (
  <nav>
    <div className="App">

      <div className="nav-class">
        <NavLink to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
        <NavLink to="/" activeClassName="selected" exact>Rockets</NavLink>
        <NavLink to="/missions" activeClassName="selected">Missions</NavLink>
        <NavLink to="/profile" activeClassName="selected">My Profile</NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
