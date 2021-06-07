import PropTypes from "prop-types";
import React from "react";

const Search = ({ handleSearch, isDisabled }) => (
  <div className="search">
    <input
      type="search"
      placeholder="digite o nome do user do github"
      onKeyUp={handleSearch}
      disabled={isDisabled}
    />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Search;
