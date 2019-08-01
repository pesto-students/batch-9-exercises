import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { routes } from './routes';
import './styles/App.css';

class App extends Component {
  render() {
    const renderedRoutes = routes.map((route) => {
      return (<Route path={route.link} component={route.component} />);
    });
    return (
      <Fragment>
        <Router>
          <Navbar />
          {renderedRoutes}
        </Router>
      </Fragment>
    );
  }
}

export default App;
