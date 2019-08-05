/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const GithubRepos = ({ repos }) => (
  <ul>
    {repos.map(element => (<li key={element}>{element}</li>))}
  </ul>
);

GithubRepos.propTypes = {
  repos: PropTypes.array,
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { username } = this.state;
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(response => this.setState({ repos: response.data.map(el => el.name) }));
  }

  render() {
    const { repos, username } = this.state;
    return (
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => {
            this.setState({ username: event.target.value });
          }}
        />
        <button
          type="button"
          onClick={this.handleClick}
        >
          Get Repos
        </button>
        <GithubRepos repos={repos} />
      </div>
    );
  }
}

export default UsernameForm;
