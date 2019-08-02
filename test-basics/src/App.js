import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    paragraphText: 'No!',
    h2Text: ''
  }

  handleClick() {
    const nextText = this.state.paragraphText === 'No!' ? 'Yes!' : 'No!';
    this.setState({ paragraphText: nextText });
  }

  handleChange(event) {
    const { value } = event.currentTarget;
    this.setState({ h2Text: value });
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <h2>{this.state.h2Text}</h2>
        <div className={this.state.mainColor}></div>
        <input onChange={(e) => this.handleChange(e)}></input>
        <p className="button-state">{this.state.paragraphText}</p>
        <Link hide={false} address="www.google.com"></Link>
        <button onClick={this.handleClick.bind(this)}>Click Me!</button>
      </div>
    );
  }
}

export class Link extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if(this.props.display === false){
      return null;
    }

    
    return (
      <a style={{ display: 'block' }} href={this.props.address}></a>
    );
  }
}

export default App;
