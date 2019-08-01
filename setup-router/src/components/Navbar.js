import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';
import { paths } from '../routes';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <NavLink to={paths.homePath} activeClassName="active" > <li>Home</li> </NavLink>
        <NavLink to={paths.aboutPath} activeClassName="active" ><li>About Us</li></NavLink>
        <NavLink to={paths.contactPath} activeClassName="active" ><li>Contact</li></NavLink>
      </ul>
    );
  }
}
