/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  componentDidMount() {
    localStorage.setItem('currentPage', 1);
    this.fetchData();
  }

  handlePrevClick() {
    const currentPage = localStorage.getItem('currentPage');
    localStorage.setItem('currentPage', Number(currentPage) - 1);
    this.fetchData();
  }

  handleNextClick() {
    const currentPage = localStorage.getItem('currentPage');
    localStorage.setItem('currentPage', Number(currentPage) + 1);
    this.fetchData();
  }

  fetchData() {
    const currentPage = localStorage.getItem('currentPage');
    fetch(`http://localhost:3001/posts/${currentPage}`, {
      headers: { 'pesto-password': 'darth vader' },
    })
      .then(response => response.json())
      .then(jsonData => this.setState({ posts: jsonData.data }))
      .catch(error => console.log(error));
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button type="button" onClick={this.handlePrevClick}>
          Previous
        </button>
        <button type="button" onClick={this.handleNextClick}>
          Next
        </button>
        <div>
          {posts.map(post => (
            <Fragment key={post.id}>
              <Post post={post} />
              <hr />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
