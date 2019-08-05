/* eslint-disable no-label-var */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Pesto',
      value: true,
    };
  }

  componentDidMount() {
    console.log('I\'m mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!');
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <p>
        Good morning,
          {name}
          !
        </p>
        <button type="button" onClick={() => this.setState(({ value }) => !value)}>Update State</button>
      </div>
    );
  }
}

export default LifeCycle;
