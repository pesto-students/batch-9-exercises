import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    localStorage.setItem('pageNumber', 1);
    this.getPosts = this.getPosts.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.getPosts(1);
  }

  getPosts(pageNumber) {
    console.log('getPosts pn is' + pageNumber);
    const url = 'http://localhost:3001/posts/' + pageNumber;
    fetch(url, {
      method: 'GET',
      headers: {
        'pesto-password': 'darth vader'
      }
    })
      .then(res => res.json())
      .then(data =>
        this.setState({ posts: data.data }, () => {
          localStorage.setItem('pageNumber', pageNumber);
        })
      );
  }

  handlePrevClick() {
    const pageNumber = localStorage.getItem('pageNumber') || 1;
    this.getPosts(pageNumber - 1);
  }

  handleNextClick() {
    const pageNumber = localStorage.getItem('pageNumber') || 1;
    this.getPosts(+pageNumber + 1);
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button
          onClick={this.handlePrevClick}
          disabled={(localStorage.getItem('pageNumber') || 1) <= 1}
        >
          Previous
        </button>
        <button
          onClick={this.handleNextClick}
          disabled={(localStorage.getItem('pageNumber') || 1) > 9}
        >
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
