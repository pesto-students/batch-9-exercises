import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';
import { routes } from '../routes';

export default class Navbar extends Component {
  render() {
    const navigationLinks = routes.map((route) => {
      if (!route.name) {
        return null;
      }
      return (<NavLink to={route.link} activeClassName="active" > <li>{route.name}</li> </NavLink>);
    });
    return (
      <ul className="nav">
        {navigationLinks}
      </ul>
    );
  }
}
