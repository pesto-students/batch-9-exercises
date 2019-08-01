import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
