import React, { Component } from 'react';

import './styles/App.css';

class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue'
  };

  render() {
    const { mainColor, on, input } = this.state;
    return (
      <div className='App'>
        <h1 className={mainColor}>Welcome to React</h1>
        <p className='button-state'>{on ? 'Yes!' : 'No!'}</p>
        <button
          type='button'
          onClick={() => this.setState(() => ({ on: !on }))}
        >
          Change Text
        </button>
        <input
          type='text'
          onChange={event =>
            this.setState({ input: event.currentTarget.value })
          }
        />
        <h2>{input}</h2>
      </div>
    );
  }
}

export class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { hide, address } = this.props;
    return hide ? null : <a href={address}>Link</a>;
  }
}

export default App;
