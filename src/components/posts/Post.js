import React from 'react';
import Comments from '../comments/Comments';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeApprove: true,
      activeDecline: true,
      approvePost: false,
      declinePost: false,
    };
  }

  handleClickOnClose = (post, removePost) => (event) => {
    event.preventDefault();
    removePost(post.id);
  };

  handleClickOnDeclinePost = (post, declinePost) => (event) => {
    event.preventDefault();
    declinePost(post.id);

    this.setState({
      activeApprove: true,
      activeDecline: false,
      approvedPost: false,
      declinedPost: true,
    });
  };

  handleClickOnApprovePost = (post, approvePost, activeApprove) => (event) => {
    event.preventDefault();
    approvePost(post.id);

    this.setState({
      activeApprove: false,
      activeDecline: true,
      approvedPost: true,
      declinedPost: false,
    });
  };

  handleClickOnSave = (post, savePost, unsavePost, isPostInStorage) => (event) => {
    event.preventDefault();

    if (isPostInStorage) {
      unsavePost(post);
    } else {
      savePost(post);
    }
  };

  isPostInStorage = (post, savedPosts) => {
    const filter = savedPosts.filter((e) => {
      return e.id === post.id;
    });

    if (filter.length) {
      return true;
    }
  };

  render() {
    const {
      post,
      removePost,
      approvePost,
      declinePost,
      addComment,
      removeComment,
      savePost,
      unsavePost,
      savedPosts,
      shortForm,
    } = this.props;

    const isPostInStorage = this.isPostInStorage(post, savedPosts);
    return (
      <div className="row">
        <div className="col s12 m6 l4">
          <div
            className={
              'card large ' +
              (this.state.approvedPost ? 'light-green lighten-4' : '') +
              (this.state.declinedPost ? 'red lighten-4' : '')
            }
          >
            <div className="card-image">
              {!shortForm
                ? <a
                    className="btn-floating btn-small waves-effect waves-light"
                    onClick={this.handleClickOnClose(post, removePost)}
                  >
                    <i className="material-icons grey darken-3">close</i>
                  </a>
                : ''}
              <img alt="" className="materialboxed" src={post.webformatURL} />
              <a
                href={post.pageURL}
                className="card-title grey lighten-1"
                style={{ padding: '5px' }}
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
              {!shortForm
                ? <a
                    className={
                      'waves-effect waves-light btn green ' +
                      (this.state.activeApprove ? '' : 'disabled')
                    }
                    onClick={this.handleClickOnApprovePost(post, approvePost)}
                  >
                    <i className="material-icons center">check</i>
                  </a>
                : ''}

              {!shortForm
                ? <a
                    className={
                      'waves-effect waves-light btn red ' +
                      (this.state.activeDecline ? '' : 'disabled')
                    }
                    onClick={this.handleClickOnDeclinePost(post, declinePost)}
                  >
                    <i className="material-icons center">report_problem</i>
                  </a>
                : ''}

              {!shortForm
                ? <a className="waves-effect waves-light btn grey darken-3 activator">
                    <i className="material-icons right">comments</i>
                  </a>
                : ''}

              <a className="waves-effect waves-light btn grey darken-3" onClick={this.handleClickOnSave(
                    post,
                    savePost,
                    unsavePost,
                    isPostInStorage,
                  )}>
                <i
                  className="material-icons center"
                >
                  {isPostInStorage ? 'delete' : 'save'}
                </i>
              </a>
            </div>
            <Comments
              post={post}
              addComment={addComment}
              removeComment={removeComment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
