import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

async function fetchRepos(username) {
  const githubBaseApiUrl = 'https://api.github.com';
  try {
    const githubFetchUsersApi = `${githubBaseApiUrl}/users/${username}/repos`;
    const response = await axios.get(githubFetchUsersApi);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
}
const GithubRepo = ({ name }) => (<li>{name}</li>);
const GithubRepos = ({ repos }) => {
  const reposComponents = repos.map(repo => (
    <GithubRepo key={repo.id} name={repo.name} fullData={repo} />));
  return (
    <ul>
      {reposComponents}
    </ul>
  );
};

GithubRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
GithubRepo.propTypes = {
  name: PropTypes.string.isRequired,
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
      fetchingRepos: false,
      reposFound: true,
      githubError: null,
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.fetchRepos = this.fetchRepos.bind(this);
  }

  onChangeHandle(event) {
    const eventTargetName = event.target.name;
    const eventTargetValue = event.target.value;
    if (eventTargetName === 'username') {
      this.setState({ username: eventTargetValue, githubError: null });
    }
  }

  fetchRepos() {
    const { fetchingRepos, username } = this.state;
    if (!fetchingRepos) {
      fetchRepos(username).then((githubResposne) => {
        this.setState({
          repos: githubResposne, reposFound: true, fetchingRepos: false, githubError: null,
        });
        return true;
      }).catch((error) => {
        this.setState({
          reposFound: false, fetchingRepos: false, githubError: error, repos: [],
        });
        return false;
      });
      this.setState({ fetchingRepos: true });
    }
  }

  render() {
    const {
      fetchingRepos, repos, reposFound, username, githubError,
    } = this.state;

    return (
      <div>
        <input
          type="text"
          name="username"
          onChange={this.onChangeHandle}
          disabled={fetchingRepos}
        />
        <button
          type="button"
          onClick={this.fetchRepos}
          disabled={fetchingRepos}
        >
          {fetchingRepos ? 'Fetching' : 'Get Repos'}
        </button>
        {!reposFound
        && githubError
        && (
        <h1>
            Error for
            {username}
            .Message:
            {githubError}
        </h1>)}
        {reposFound && !githubError && <h1>Repositories List</h1>}
        <GithubRepos repos={repos} />
      </div>
    );
  }
}

export default UsernameForm;
