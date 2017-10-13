import React from 'react';
import Posts from './posts/Posts';

const SavedItems = ({ savePost, unsavePost, savedPosts }) =>
  <div>
    <a
      className="waves-effect waves-light btn-large modal-trigger grey darken-3"
      href="#modal1"
    >
      {'Saved posts (' + savedPosts.length + ')'}
    </a>
    <div id="modal1" className="modal">
      <div className="modal-content black-text">
        <h4>Saved posts</h4>
        {savedPosts.length > 0
          ? <Posts
              posts={savedPosts}
              savePost={savePost}
              unsavePost={unsavePost}
              shortForm={true}
              saved={true}
              savedPosts={savedPosts}
            />
          : 'No saved posts'}
      </div>
    </div>
  </div>;

export default SavedItems;
