import React from 'react';
import axios from 'axios';

class UsernameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: []
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  inputChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  onButtonClick() {
    this.props.onSubmitClick(this.state.username);
  }

  render() {
    return (
      <div>
        <input
          type='text'
          name='username'
          onChange={this.inputChangeHandler}
          value={this.state.username}
        />
        <button onClick={this.onButtonClick}>Get Repos</button>
      </div>
    );
  }
}

export default UsernameForm;
