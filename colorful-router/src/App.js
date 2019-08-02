import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

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
      <Switch>
        <Route exact path="/" component={ColorList()} />
        <Route exact path="/colors" render={colorListComponent()} />
        <Route
          exact
          path="/colors/new"
          render={() =>
            <NewColor addColor={this.handleAdd} {...this.props} />
          }
        />
        {this.state.colors.map((color) => {
          return (
            <Route
              exact
              path="/colors/:color"
              render={() => <Color color={color} {...this.props} />}
            />);
        })}
      </Switch>
    );
  }
}

export default App;
