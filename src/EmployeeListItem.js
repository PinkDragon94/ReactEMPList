import React from 'react';

const EmployeeListItem = ({ name, position, callOffice, callMobile, email, SMS}) => {
  return (
    <div style={styles.item}>
      <h3>{name}</h3>
      <p>{position}</p>
      <p>{callOffice}</p>
      <p>{callMobile}</p>
      <p>{email}</p>
      <p>{SMS}</p>
    </div>
  );
};

const styles = {
  item: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default EmployeeListItem;
