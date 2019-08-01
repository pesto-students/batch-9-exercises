import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';

export default class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  render() {
    return (
      <ul className="nav">
        <li><NavLink exact className="link" to="/home">Home</NavLink></li>
        <li><NavLink exact className="link" to="/about">About Us</NavLink></li>
        <li><NavLink exact className="link" to="/contact">Contact</NavLink></li>
      </ul>
    );
  }
}
