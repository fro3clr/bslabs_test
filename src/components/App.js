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
  declinePost,
} from '../actions/posts';
import { addComment, removeComment } from '../actions/comments';
import { saveStorage } from '../actions/storage';

class App extends Component {
  componentWillMount() {
    this.props.fetchPosts('robot');
    this.synchronizeStorage();
  }

  getPosts(posts) {
    return posts && posts.get('list').size > 0 ? posts.toJS().list : [];
  }

  synchronizeStorage() {
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts'));
    if (!JSON.parse(localStorage.getItem('savedPosts'))) {
      localStorage.setItem('savedPosts', JSON.stringify([]));
    } else {
      this.props.saveStorage(savedPosts);
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          logo={logo}
          saveStorage={this.props.saveStorage}
          fetchPosts={this.props.fetchPosts}
          storagePosts={this.getPosts(this.props.storage)}
        />
        <p className="App-intro">Test task for Business Labs</p>
        <Posts
          posts={this.getPosts(this.props.posts)}
          removePost={this.props.removePost}
          approvePost={this.props.approvePost}
          declinePost={this.props.declinePost}
          addComment={this.props.addComment}
          removeComment={this.props.removeComment}
          saveStorage={this.props.saveStorage}
          storagePosts={this.getPosts(this.props.storage)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => state.toObject();

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (keyWord) => {
            dispatch(fetchPosts(keyWord));
        },
         removePost: (postId) => {
            dispatch(removePost(postId));
        },
         approvePost: (postId) => {
            dispatch(approvePost(postId));
        },
         declinePost: (postId) => {
            dispatch(declinePost(postId));
        },
         addComment: (postId, commentData) => {
            dispatch(addComment(postId, commentData));
        },
         removeComment: (postId, commentData) => {
            dispatch(removeComment(postId, commentData));
        },
         saveStorage: (data) => {
            dispatch(saveStorage(data));
        },
    }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
