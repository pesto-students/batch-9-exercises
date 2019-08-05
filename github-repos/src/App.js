import React from 'react';
import Username from './components/UsernameForms';
import GithubRepos from './components/GithubRepos';
import { connect } from 'react-redux';
import './App.css';

import * as actions from './redux/actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Username onSubmitClick={this.props.onSumitButtonClick} />
        <GithubRepos repos={this.props.repos} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repositories
});

const mapDispatchToProps = dispatch => {
  return {
    onSumitButtonClick: username =>
      dispatch(actions.fetchGithubRepositories(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
