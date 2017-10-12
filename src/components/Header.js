import React from "react";
import SearchForm from "./SearchForm";

const handleSearch = (fetchPosts) => event => {
    event.preventDefault();
    fetchPosts(event.target.value);
}

const Header = ({ logo, fetchPosts }) =>
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <nav>
      <div className="nav-wrapper">
        <SearchForm fetchPosts={fetchPosts} />
      </div>
    </nav>
  </header>;

export default Header;
