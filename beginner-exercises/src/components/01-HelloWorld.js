import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor() {
    super();
    this.state = { heading: 'Hello World' };
  }
  render() {
    const { heading } = this.state;
    return (
      <h1>{ heading }</h1>
    );
  }
}

export default HelloWorld;
