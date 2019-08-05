import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: parseInt(localStorage.getItem('pageNumber')) || 1,
      posts: [],
    };
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.fetchResponses = this.fetchResponses.bind(this);
    this.fetchResponses(this.state.pageNumber);
  }

  handlePrevClick() {
    this.fetchResponses(this.state.pageNumber - 1);
  }

  handleNextClick() {
    this.fetchResponses(this.state.pageNumber + 1);
  }

  fetchResponses(pageNumber) {
    fetch(`http://localhost:3001/posts/${pageNumber}`, {
      headers: {
        'pesto-password': 'darth vader',
      },
    })
      .then(response => response.json())
      .then((response) => {
        localStorage.setItem('pageNumber', pageNumber);
        this.setState({
          posts: response.data,
          pageNumber,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>Previous</button>
        <button onClick={this.handleNextClick}>Next</button>
        <div>
          {this.state.posts.map(post => (
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
