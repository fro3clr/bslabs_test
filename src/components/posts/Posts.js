import React from "react";
import Post from "./Post";

const Posts = ({ posts, removePost, approvePost, declinePost, addComment, removeComment }) =>
  <div className="posts">
    {posts
      ? posts.map((post, postIndex) =>
          <Post
            key={post.id}
            post={post}
            removePost={removePost}
            approvePost={approvePost}
            declinePost={declinePost}
            addComment={addComment}
            removeComment={removeComment}
          />
        )
      : null}
  </div>;

export default Posts;
