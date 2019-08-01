import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';
import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="nav">
            <li>
              <NavLink to="/home/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about/">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact/">Contact</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home/" exact component={Home} />
            <Route path="/about/" exact component={About} />
            <Route path="/contact/" exact component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
