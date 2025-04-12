import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search expenses..."
      onChange={(e) => setSearchTerm(e.target.value)}
      aria-label="Search expenses"
      className="search-bar"
    />
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired
};

export default SearchBar;
