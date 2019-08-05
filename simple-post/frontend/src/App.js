import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 1
    };
    this.getPosts = this.getPosts.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.getPosts(1);
  }

  getPosts(pageNumber) {
    const url = 'http://localhost:3001/posts/' + pageNumber;
    fetch(url, {
      method: 'GET',
      headers: {
        'pesto-password': 'darth vader'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ posts: data.data, page: pageNumber }));
  }

  handlePrevClick() {
    this.getPosts(this.state.page - 1);
  }

  handleNextClick() {
    this.getPosts(this.state.page + 1);
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick} disabled={this.state.page <= 1}>
          Previous
        </button>
        <button onClick={this.handleNextClick} disabled={this.state.page > 9}>
          Next
        </button>
        <div>
          {this.state.posts.map(post => {
            return (
              <Fragment key={post.id}>
                <Post post={post} />
                <hr />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
