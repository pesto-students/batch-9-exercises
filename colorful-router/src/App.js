import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';

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
          hex: '#FF0000'
        },
        {
          name: 'green',
          hex: '#00FF00'
        },
        {
          name: 'blue',
          hex: '#0000FF'
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  renderColorPageIfExists(colorName, history) {
    console.log(colorName);
    const objectInState = this.state.colors.filter(
      element => element.name === colorName
    );
    if (objectInState.length > 0) {
      return <Color color={objectInState[0]} />;
    } else {
      return <Redirect to='/' />;
    }
    return <div>...</div>;
  }

  render() {
    const colorListComponent = () => <ColorList colors={this.state.colors} />;

    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path='/' exact render={() => <Redirect to='/color' />} />
            <Route path='/color' exact render={colorListComponent} />
            <Route
              path='/color/new'
              exact
              render={props => (
                <NewColor addColor={this.handleAdd} {...props} />
              )}
            />
            <Route
              path='/color/:colorName'
              render={props =>
                this.renderColorPageIfExists(
                  props.match.params.colorName,
                  props.history
                )
              }
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
