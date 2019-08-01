import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './styles/index.css';
import App from './App';
import Color from './components/Color';
import NewColor from './components/NewColor';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/colors/new" component={NewColor} />
        <Route exact path="/colors" component={App} />
        <Route path="/colors/:color" component={Color} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root'),
);
registerServiceWorker();
