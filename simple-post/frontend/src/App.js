import React, { Component, Fragment } from 'react';

import PostItem from './components/PostItem';
import './App.css';


class App extends Component {
  state = {
    posts: [],
    pageId: 0
  };

  componentDidMount() {
    const pageId = localStorage.getItem('pageId');
    console.log("The page id is : ", pageId);
    this.setState({ pageId: pageId || 0 });
    if (!pageId) {
      localStorage.setItem("pageId", 0);
    }
  }

  handlePrevClick = () => {
    const pageId = this.state.pageId - 1;
    this.getPosts(pageId);
  }

  handleNextClick = () => {
    const pageId = parseInt(this.state.pageId, 10) + 1;
    this.getPosts(pageId);
  }

  handlePostClick = () => {

  }

  getPosts(pageId) {
    fetch(`http://localhost:3001/posts/${pageId}`, {
      method: 'GET',
      headers: {
        'pesto-password': 'darth vader',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        localStorage.setItem("pageId", pageId);
        this.setState({ posts: [...response.data], pageId: pageId });
      })
      .catch(error => {
        console.error('Could not process this request due to the error : ', error);
      })
  }


  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>
          Previous
        </button>
        <button onClick={this.handleNextClick}>
          Next
        </button>
        <div>
          {this.state.posts.map((post) => {
            return (
              <Fragment key={post.id}>
                <PostItem post={post} />
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
