import React from "react";

const Post = ({ post }) =>
  <div className="row">
    <div className="col s12 m6 l4">
      <div className="card medium">
        <div className="card-image">
          <a class="btn-floating btn-small waves-effect waves-light">
            <i class="material-icons grey darken-3">close</i>
          </a>
          <img src={post.webformatURL} />
          <a
            href={post.pageURL}
            className="card-title"
            style={{ color: "#adadad" }}
          >
            Source
          </a>
          <span class="likes-count"><i class="material-icons right">favorite</i>{post.likes}</span>
        </div>
        <div className="card-content">
          <p>
            {post.tags}
          </p>
        </div>
        <div className="card-action">
          <a class="waves-effect waves-light btn green">
            <i class="material-icons center">check</i>
          </a>
          <a class="waves-effect waves-light btn red">
            <i class="material-icons center">report_problem</i>
          </a>
          <a class="waves-effect waves-light btn">Save/Delete</a> <br />
        </div>
      </div>
    </div>
  </div>;

export default Post;
