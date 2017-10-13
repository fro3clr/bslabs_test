import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import Posts from './posts/Posts';
import Header from './Header';
import {
  fetchPosts,
  removePost,
  approvePost,
  declinePost
} from '../actions/posts';
import { addComment, removeComment } from '../actions/comments';
import { readFromStorage, savePost, unsavePost } from '../actions/storage';

class App extends Component {
  componentWillMount() {
    this.props.fetchPosts("robot");
    this.props.readFromStorage();
  }

  getPosts(posts) {
    return posts && posts.get("list").size > 0 ? posts.toJS().list : [];
  }

   getPostsStorage(posts) {
    return posts && posts.get("list") ? posts.toJS().list : [];
  }

  render() {
    return (
      <div className="App">
        <Header
          logo={logo}
          savePost={this.props.savePost}
          unsavePost={this.props.unsavePost}
          fetchPosts={this.props.fetchPosts}
          savedPosts={this.getPostsStorage(this.props.savedPosts)}
        />
        <p className="App-intro">Test task for Business Labs</p>
        <Posts
          posts={this.getPosts(this.props.posts)}
          removePost={this.props.removePost}
          approvePost={this.props.approvePost}
          declinePost={this.props.declinePost}
          addComment={this.props.addComment}
          removeComment={this.props.removeComment}
          savePost={this.props.savePost}
          unsavePost={this.props.unsavePost}
          savedPosts={this.getPostsStorage(this.props.savedPosts)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => state.toObject();

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: keyWord => {
      dispatch(fetchPosts(keyWord));
    },
    removePost: postId => {
      dispatch(removePost(postId));
    },
    approvePost: postId => {
      dispatch(approvePost(postId));
    },
    declinePost: postId => {
      dispatch(declinePost(postId));
    },
    addComment: (postId, commentData) => {
      dispatch(addComment(postId, commentData));
    },
    removeComment: (postId, commentData) => {
      dispatch(removeComment(postId, commentData));
    },
    readFromStorage: () => {
      dispatch(readFromStorage());
    },
    savePost: post => {
      dispatch(savePost(post));
    },
    unsavePost: post => {
      dispatch(unsavePost(post));
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
