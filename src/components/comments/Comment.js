import React from "react";

const handleClickOnDelete = (postId, commentId, removeComment) => event => {
  event.preventDefault();
  removeComment(postId, commentId);
};

const Comment = ({ postId, commentId, comment, removeComment }) =>
  <div className="comment left-align">
    <i
      className="material-icons right small"
      style={{ cursor: "pointer" }}
      onClick={handleClickOnDelete(postId, commentId, removeComment)}
    >
      delete
    </i>
    <div className="author">
      <b>
        {comment.commentName}
      </b>
    </div>
    <div className="comment-body">
      {comment.commentBody}
    </div>
    <br />
  </div>;

export default Comment;
