import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Employee Directory</h1>
    </header>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
  },
};

export default Header;
