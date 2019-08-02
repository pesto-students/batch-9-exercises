/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <h2>{this.state.input}</h2>
        <input type="text" value={this.state.input} onChange={e => this.setState({ input: e.currentTarget.value })} />
        <p className={this.state.mainColor}>abc</p>
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
