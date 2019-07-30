import React from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Pesto',
      options: ['Pesto', 'Piyush', 'Arfat'],
    };
    this.onClickhandle = this.onClickhandle.bind(this);
  }

  componentDidMount() {
    console.log('I am mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    const { name } = this.state;
    if (prevState.name !== name) {
      console.log('Updated!');
    }
  }

  componentWillUnmount() {
    const { name } = this.state;
    console.log(`Good night,${name}`);
  }

  onClickhandle() {
    const { options } = this.state;
    const newNameIndex = getRandomInt(3);
    const newName = options[newNameIndex];
    this.setState({ name: newName });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <p>
          Good morning,
          {' '}
          {name}
          !
        </p>
        <button type="button" onClick={this.onClickhandle}>Try Changing Name</button>
      </div>
    );
  }
}

export default LifeCycle;
