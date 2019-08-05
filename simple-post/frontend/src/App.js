import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  state = {
    posts: [
      {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    },
    {
        "id": 2,
        "title": "qui est esse"
    },
    {
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut"
    },
    {
        "id": 4,
        "title": "eum et est occaecati"
    },
    {
        "id": 5,
        "title": "nesciunt quas odio"
    },
    {
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia"
    },
    {
        "id": 7,
        "title": "magnam facilis autem"
    },
    {
        "id": 8,
        "title": "dolorem dolore est ipsam"
    },
    {
        "id": 9,
        "title": "nesciunt iure omnis dolorem tempora et accusantium"
    },
    {
        "id": 10,
        "title": "optio molestias id quia eum"
    }
    ],
  };

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
