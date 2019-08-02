import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }

  toggleButtonState = this.toggleButtonState.bind(this)
  handleOnChange = this.handleOnChange.bind(this)
  handleStrings = this.handleStrings.bind(this)
  toggleButtonState() {
    this.setState(({ on }) => ({ on: !on }));
  }

  handleOnChange({ currentTarget: { value } }) {
    this.setState(({ input: value }));
  }

  handleStrings(string) {
    const isStringAndNotEmpty = typeof string === 'string' && string.length > 0;
    return isStringAndNotEmpty;
  }
  render() {
    const { mainColor, on, input } = this.state;
    return (
      <div className="App">
        <h1 className={mainColor} >Welcome to React</h1>
        <h2>{input}</h2>
        <button type="button" onClick={this.toggleButtonState}>
          <p className="button-state">
            {
              on ? 'Yes!' : 'No!'
            }
          </p>
        </button>
        <input type="text" name="heading" onChange={this.handleOnChange} value={input} />
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
