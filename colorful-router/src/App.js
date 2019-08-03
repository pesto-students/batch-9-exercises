import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';
import { paths } from './routes';

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
      <Route
        exact
        path={paths.color}
        render={() => {
  return (<ColorList colors={this.state.colors} />);
      }}
      />
    );
    const selectedColorPage = () => (
      <Route
        exact
        path={paths.colorPage}
        render={(routerProps) => {
        const { match: { params } } = routerProps;
        const colorPage = this.state.colors.find(color => color.name === params.colorName);
        if (colorPage) {
          return (
            <Color color={colorPage} />
          );
        }
        if (params.colorName === 'new') {
          return (
            <NewColor addColor={this.handleAdd} {...routerProps} />
          );
        }
          return (
            <div />
          );
      }}
      />
    );
    return (
      <div>
        <Router>
          <div>
            {colorListComponent()}
            {selectedColorPage()}
            <Redirect to={paths.color} />
          </div>

        </Router>
      </div>

    );
  }
}

export default App;
