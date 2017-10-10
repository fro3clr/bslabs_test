import React from "react";
import Post from "./Post";

const Posts = ({ posts }) =>
  <div className="posts">
        {posts
            ? posts.map((post, postIndex) => (
                <Post post={post} />))
            : null
        }
  </div>;

export default Posts;