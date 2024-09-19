import React from 'react';

const SearchBar = () => {
  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for an employee..."
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  input: {
    width: '50%',
    padding: '10px',
    fontSize: '16px',
  },
};

export default SearchBar;
