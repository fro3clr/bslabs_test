import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ post, addComment, removeComment }) =>
  <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Comments<i className="material-icons right">close</i>
        </span>
        <ul className="comments-list">
            {post.commentsList
      ? post.commentsList.map((comment, commentId) =>
          <Comment
            key={commentId}
            postId={post.id}
            commentId={commentId}
            comment={comment}
            removeComment={removeComment}
          />
        )
      : null}
        </ul>
        <CommentForm post={post} addComment={addComment}/>
      </div>;

export default Comments;