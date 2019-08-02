/* eslint-disable  */
import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './history';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: 'red',
          hex: '#FF0000',
        },
        {
          name: 'green',
          hex: '#00FF00',
        },
        {
          name: 'blue',
          hex: '#0000FF',
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  render() {
    const colorListComponent = () => (
      <ColorList colors={this.state.colors} />
    );
    return (
      <Router history={history}>
        <Switch>
          <Route path={['/', '/colors']} exact component={() => colorListComponent()} />
          <Route path="/colors/new" exact component={() => <NewColor addColor={this.handleAdd} />} />
          <Route path="/colors/:color" exact component={Color} />
        </Switch>
      </Router>
    );
  }
}

export default App;
