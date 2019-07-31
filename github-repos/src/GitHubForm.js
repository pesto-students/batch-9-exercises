import React from 'react';
import connect from 'react-redux';

import getRepos from './actions/index';

const mapStateToProps = state => ({ username: state.username, repos: state.repos });
const mapDispatchToProps = dispatch => ({ fetchGithubRepos: username => dispatch(getRepos(username)) });

class ConnectedGitHubForm extends React.Component {
    state = { username: '', repos: [] };
    getRepos() {
        if (!this.state.username) {
            return;
        }
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
                <Input type='text' value={this.state.username} onChange={this.usernameChanged.bind(this)} />
                <Button className={'btn'} onClick={this.getRepos.bind(this)} buttonText={'Get Repos'} />
                <GitHubRepos repos={this.state.repos}></GitHubRepos>
            </div>
        );
    }

}
const GitHubForm = connect(mapStateToProps)(ConnectedGitHubForm);

export default GitHubForm;