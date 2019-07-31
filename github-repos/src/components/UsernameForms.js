import React from 'react';
import axios from 'axios';

class UsernameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: []
    };

    this.fetchGithubRepos = this.fetchGithubRepos.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  fetchGithubRepos() {
    axios
      .get('https://api.github.com/users/' + this.state.username + '/repos')
      .then(res => {
        this.setState({ repos: res.data || [] });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  inputChangeHandler(event) {
    this.setState({ username: event.target.value });
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
        <button onClick={this.fetchGithubRepos}>Get Repos</button>
        {/* <GithubRepos repos={this.state.repos} /> */}
      </div>
    );
  }
}

export default UsernameForm;
