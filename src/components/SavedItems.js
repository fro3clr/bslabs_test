import React from "react";
import Posts from "./posts/Posts";

const SavedItems = ({ saveStorage, storagePosts }) =>
  <div>
    <a
      className="waves-effect waves-light btn-large modal-trigger grey darken-3"
      href="#modal1"
    >
      {"Saved posts (" + storagePosts.length + ")"}
    </a>
    <div id="modal1" className="modal">
      <div className="modal-content black-text">
        <h4>Saved posts</h4>
        {storagePosts.length > 0
          ? <Posts
              posts={storagePosts}
              saveStorage={saveStorage}
              shortForm={true}
              saved={true}
              storagePosts={storagePosts}
            />
          : "No saved posts"}
      </div>
    </div>
  </div>;

export default SavedItems;
