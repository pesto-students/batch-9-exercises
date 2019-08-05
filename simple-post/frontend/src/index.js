import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Post from './components/Post';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/post/:id" component={Post} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
