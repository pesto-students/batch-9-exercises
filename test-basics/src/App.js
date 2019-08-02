import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue'
  };

  handleClick = () => this.setState({ on: !this.state.on });
  render() {
    return (
      <div className='App'>
        <h1>Welcome to React</h1>

        <p className='button-state'>{this.state.on ? 'Yes!' : 'No!'}</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    return null;
  }
}

export default App;
