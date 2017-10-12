import React from "react";
import SearchForm from "./SearchForm";
import SavedItems from "./SavedItems";

const Header = ({ logo, saveStorage, fetchPosts, storagePosts }) =>
  <div className="row">
    <header className="App-header">
      <div className="col s2">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="col s8">
        <SearchForm fetchPosts={fetchPosts} />
      </div>
      <div className="col s2">
        <SavedItems saveStorage={saveStorage} storagePosts={storagePosts} />
      </div>
    </header>
  </div>;

export default Header;
