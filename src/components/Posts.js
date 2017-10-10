import React from "react";
import Post from "./Post";

const Posts = ({ posts, removePost }) =>
  <div className="posts">
    {posts
      ? posts.map((post, postIndex) =>
          <Post key={post.id} post={post} removePost={removePost} />
        )
      : null}
  </div>;

export default Posts;
