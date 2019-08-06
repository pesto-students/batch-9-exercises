import React, { Component } from 'react';

class App extends Component {
  /* eslint-disable react/no-unused-state */
  state = {
    lifeCycle: '',
  }

  componentDidMount() {
    this.setState(() => ({ lifeCycle: 'componentDidMount' }));
  }

  componentWillReceiveProps() {
    this.setState(() => ({ lifeCycle: 'componentWillReceiveProps' }));
  }

  render() {
    const { lifeCycle } = this.state;
    return (
      <div className="App">
        Welcome to react
        <p className="lifeCycle">{lifeCycle}</p>
      </div>
    );
  }
}

export default App;
