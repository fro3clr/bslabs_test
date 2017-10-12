import React from "react";

const handleSearch = fetchPosts => event => {
  event.preventDefault();
  fetchPosts(event.target.value);
};

const SearchForm = ({ fetchPosts }) =>
  <form className="grey darken-3">
    <div className="input-field">
      <input type="search" required onChange={handleSearch(fetchPosts)} />
      <label className="label-icon" for="search">
        <i className="material-icons">search</i>
      </label>
      <i className="material-icons">close</i>
    </div>
  </form>;

export default SearchForm;
