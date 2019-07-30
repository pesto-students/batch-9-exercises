import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
  }
  componentDidMount() {
    console.log('I\'m mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!');
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    console.log(`Good night, ${this.state.name}`);
  }

  render() {
    return (
      <div>
        <p>Good morning, {this.state.name}!</p>
        <button onClick={this.componentDidUpdate}>Click this</button>
      </div>
    );
  }
}

export default LifeCycle;
