import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Posts from "./posts/Posts";
import {
  fetchPosts,
  removePost,
  approvePost,
  declinePost
} from "../actions/posts";
import { addComment, removeComment } from "../actions/comments";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Test task for Business Labs</p>
        <Posts
          posts={this.getPosts()}
          removePost={this.props.removePost}
          approvePost={this.props.approvePost}
          declinePost={this.props.declinePost}
          addComment={this.props.addComment}
          removeComment={this.props.removeComment}
        />
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchPosts("robot");
  }

  getPosts() {
    const posts = this.props.posts;

    return posts && posts.get("list").size > 0 ? posts.toJS().list : [];
  }
}

const mapStateToProps = state => state.toObject();

const AppContainer = connect(mapStateToProps, {
  fetchPosts,
  removePost,
  approvePost,
  declinePost,
  addComment,
  removeComment
})(App);

export default AppContainer;
