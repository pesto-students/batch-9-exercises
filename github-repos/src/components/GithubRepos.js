import React from 'react';

const GithubRepos = props => {
  if (props.repos) {
    return (
      <ol>
        {props.repos.map(repo => (
          <li key={repo.url}>
            {' '}
            <a href={repo.url} style={{ color: 'blue' }}>
              {repo.full_name}
            </a>
          </li>
        ))}
      </ol>
    );
  } else {
    return <p />;
  }
};

export default GithubRepos;
