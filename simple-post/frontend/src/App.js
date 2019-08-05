import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';
import { fetchPagePosts } from './components/utils/getPageData';
import {getCurrentPage, setCurrentPage} from './components/utils/pageHelper';

class App extends Component {
  state = {
    currentPage: 1,
    posts: [],
  };

  getPageData = this.getPageData.bind(this);
  handlePrevClick = this.handlePrevClick.bind(this);
  handleNextClick = this.handleNextClick.bind(this);

  componentDidMount() {
    const { currentPage } = this.state;
    const lastPage = getCurrentPage();
    if(lastPage) {
      this.setState({ currentPage: lastPage });
      this.getPageData(lastPage);
    } else {
      this.getPageData(currentPage);
    }
  }
  
  getPageData(pageNumber) {
    fetchPagePosts(pageNumber).then((response) => {
     this.setState({posts:response.data,});
    }).catch((e) => {
      console.error('Error while fetching page', e);
    })
  }

  handlePrevClick() {
    const { currentPage } = this.state;
    const newPage = currentPage - 1;
    this.setState(()=> {
      const newState =  ({currentPage: newPage});
      setCurrentPage(newPage);
      return newState;
    })

    this.getPageData(newPage)
  }

  handleNextClick() {
    const { currentPage } = this.state;
    const newPage = currentPage + 1;
    this.setState(()=> {
      const newState =  ({currentPage: newPage});
      setCurrentPage(newPage);
      return newState;
    })

    this.getPageData(newPage)
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
