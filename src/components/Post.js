import React from "react";

const handleClickOnClose = (post, removePost) => event => {
  event.preventDefault();
  removePost(post.id);
};

const Post = ({ post, removePost }) =>
  <div className="row">
    <div className="col s12 m6 l4">
      <div className="card medium">
        <div className="card-image">
          <a
            className="btn-floating btn-small waves-effect waves-light"
            onClick={handleClickOnClose(post, removePost)}
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
          <a className="waves-effect waves-light btn green">
            <i className="material-icons center">check</i>
          </a>
          <a className="waves-effect waves-light btn red">
            <i className="material-icons center">report_problem</i>
          </a>
          <a className="waves-effect waves-light btn">Save/Delete</a> <br />
        </div>
      </div>
    </div>
  </div>;

export default Post;
