import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className='nav'>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/about' exact activeClassName='active'>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' exact activeClassName='active'>
            Contact
          </NavLink>
        </li>
      </ul>
    );
  }
}
