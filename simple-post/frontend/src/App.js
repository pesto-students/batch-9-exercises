import React, { Component, Fragment } from 'react';
import { fetchPagePosts, fetchSelectedPost } from './components/utils/getPageData';
import {getCurrentPage, setCurrentPage} from './components/utils/pageHelper';

import Post from './components/Post';
import PostPage from './components/PostPage'
import './App.css';


class App extends Component {
  state = {
    currentPage: 1,
    posts: [],
    fetchingPost:false,
    currentPost:null,
    openCurrentPost:false
  };

  getPageData = this.getPageData.bind(this);
  handlePrevClick = this.handlePrevClick.bind(this);
  handleNextClick = this.handleNextClick.bind(this);
  readClickedPost = this.readClickedPost.bind(this);
  closeCurrentPost = this.closeCurrentPost.bind(this);

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

  readClickedPost(postId) {
    this.setState(() => ({fetchingPost:true, openCurrentPost: true}));
    fetchSelectedPost(postId).then((response) => {
      this.setState({currentPost:response.data, fetchingPost:false})
    })
  }
  closeCurrentPost() {
    this.setState({ openCurrentPost: false });
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
              <Fragment key={post.id}  >
                <Post post={post} readCurrentPost={this.readClickedPost} />
                <hr />
              </Fragment>
            );
          })}
        <PostPage show={this.state.openCurrentPost} handleClose={this.closeCurrentPost} post={this.state.currentPost} loading={this.state.fetchingPost} />
        </div>
      </div>
    );
  }
}

export default App;
