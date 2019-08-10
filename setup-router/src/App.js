import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
          <Redirect to="/404" />
        </Router>
      </Fragment>
    );
  }
}

export default App;
