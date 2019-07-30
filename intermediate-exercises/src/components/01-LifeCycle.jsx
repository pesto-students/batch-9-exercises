import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Pesto',
      count: 0,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Updated!');
    }
  }

  componentWillUnmount() {
    console.log(`Good night, ${this.state.name}!`);
  }

  onButtonClick() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  render() {
    return <button onClick={this.onButtonClick}>CLICK ME!</button>;
  }
}

export default LifeCycle;
