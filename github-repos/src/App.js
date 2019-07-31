import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import './App.css';

const Input = ({ type, onChange, value, children }) => (
  <input type={type} onChange={onChange} value={value}>{children}</input>
)

const Button = ({ className, onClick, buttonText }) => (
  <button className={className} onClick={onClick} >{buttonText}</button>
);

const GitHubRepos = ({ repos }) => {
  const repoList = repos.map(repo => <li key={repo.name}>Name: {repo.name}, Url: {repo.html_url}</li>);
  return (<ul>
    {repoList}
  </ul>
  );
};

const App = () => (
  <div>
    <GitHubForm></GitHubForm>
  </div>
);

export default App;
