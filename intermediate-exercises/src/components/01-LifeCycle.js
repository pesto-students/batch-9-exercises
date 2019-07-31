import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState });
    console.log("Updated!");
  }

  componentWillUnmount() {
    console.log("Good night, Pesto!");
  }

  handleButtonClick() {
    this.setState({ name: 'Avinash' });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Change State</button>
        <p>Good morning, {this.state.name}!</p>
      </div>
    );
  }
}

export default LifeCycle;
