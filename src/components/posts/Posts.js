import React from 'react';
import Post from './Post';

const Posts = ({
  posts,
  removePost,
  approvePost,
  declinePost,
  addComment,
  removeComment,
  savePost,
  unsavePost,
  savedPosts,
  shortForm,
}) =>
  <div className="posts">
    {posts
      ? posts.map(post =>
          <Post
            key={post.id}
            post={post}
            removePost={removePost}
            approvePost={approvePost}
            declinePost={declinePost}
            addComment={addComment}
            removeComment={removeComment}
            savePost={savePost}
            unsavePost={unsavePost}
            savedPosts={savedPosts}
            shortForm={shortForm}
          />)
      : null}
  </div>;

export default Posts;
