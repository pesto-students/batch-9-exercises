import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

/**
 * Axios is a promise based HTTP client for the browser and node.js.
 * Refer to their github page to see how to use it to make HTTP requests.
 * Axios: https://github.com/axios/axios
 *
 * It is best not to fetch data from a server in the `render` method.
 * Any change to the state of a component can cause a re-render of the
 * component. This will likely happen more often than we want.
 * Use the appropriate lifecycle method to make the axios request.
 *
 * Exercise:
 *
 *  Create a `GithubRepos` component that lists all the GitHub repos for a user.
 *  Allow the repos to be provided as a prop.
 *
 *  https://api.github.com/users/{username}/repos
 */
/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos }) => {
  const reposList = repos
    .map(repo => <li key={repo.name}>Name: {repo.name}, Url: {repo.html_url}</li>);
  return (
    <ul>
      {reposList}
    </ul>
  );
};

// Task: Open the console in the browser. There will be a warning
// about incorrect prop type for user.
// Define the correct prop type for the prop `repos`
GithubRepos.propTypes = {
  repos: PropTypes.array.isRequired,
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
    this.getRepos = this.getRepos.bind(this);
    this.usernameChanged = this.usernameChanged.bind(this);
  }

  getRepos() {
    const GITHUBAPI = `https://api.github.com/users/${this.state.username}/repos`;
    axios.get(GITHUBAPI)
      .then((response) => {
        const repoNameAndUrl = response
          .data.map(res => ({ name: res.name, html_url: res.html_url }));
        this.setState({ repos: repoNameAndUrl });
      });
  }

  usernameChanged({ target }) {
    const { value } = target;
    this.setState({ username: value });
  }


  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          onChange={e => this.usernameChanged(e)}
        />
        <button
          onClick={this.getRepos}
        >
          Get Repos
        </button>
        <GithubRepos repos={this.state.repos} />
      </div>
    );
  }
}

export default UsernameForm;
