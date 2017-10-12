import React from 'react';
import Post from './Post';

const Posts = ({
  posts,
  removePost,
  approvePost,
  declinePost,
  addComment,
  removeComment,
  saveStorage,
  shortForm,
  storagePosts,
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
            saveStorage={saveStorage}
            shortForm={shortForm}
            storagePosts={storagePosts}
          />)
      : null}
  </div>;

export default Posts;
