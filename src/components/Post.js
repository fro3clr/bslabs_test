import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeApprove: true,
      activeDecline: true,
      approvePost: false,
      declinePost: false
    };
  }

  handleClickOnClose = (post, removePost) => event => {
    event.preventDefault();
    removePost(post.id);
  };

  handleClickOnDeclinePost = (post, declinePost) => event => {
    event.preventDefault();
    declinePost(post.id);

    this.setState({
      activeApprove: true,
      activeDecline: false,
      approvedPost: false,
      declinedPost: true
    });
  };

  handleClickOnApprovePost = (post, approvePost, activeApprove) => event => {
    event.preventDefault();
    approvePost(post.id);

    this.setState({
      activeApprove: false,
      activeDecline: true,
      approvedPost: true,
      declinedPost: false
    });
  };

  render() {
    const { post, removePost, approvePost, declinePost } = this.props;
    return (
      <div className="row">
        <div className="col s12 m6 l4">
          <div
            className={
              "card medium " +
              (this.state.approvedPost ? "light-green lighten-4" : "") +
              (this.state.declinedPost ? "red lighten-4" : "")
            }
          >
            <div className="card-image">
              <a
                className="btn-floating btn-small waves-effect waves-light"
                onClick={this.handleClickOnClose(post, removePost)}
              >
                <i className="material-icons grey darken-3">close</i>
              </a>
              <img alt="" src={post.webformatURL} />
              <a
                href={post.pageURL}
                className="card-title"
                style={{ color: "#adadad" }}
              >
                Source
              </a>
              <span className="likes-count">
                <i className="material-icons right">favorite</i>
                {post.likes}
              </span>
            </div>
            <div className="card-content">
              <p>
                {post.tags}
              </p>
            </div>
            <div className="card-action">
              <a
                className={
                  "waves-effect waves-light btn green " +
                  (this.state.activeApprove ? "" : "disabled")
                }
                onClick={this.handleClickOnApprovePost(post, approvePost)}
              >
                <i className="material-icons center">check</i>
              </a>
              <a
                className={
                  "waves-effect waves-light btn red " +
                  (this.state.activeDecline ? "" : "disabled")
                }
                onClick={this.handleClickOnDeclinePost(post, declinePost)}
              >
                <i className="material-icons center">report_problem</i>
              </a>
              <a className="waves-effect waves-light btn">Save/Delete</a> <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
