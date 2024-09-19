import React from 'react';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = () => {
  return (
    <div style={styles.list}>
      <EmployeeListItem name="John Doe" position="Developer" callOffice="123-579-5555" callMobile="353-666-8795" email="john@example.com" SMS="656-555-1111"/>
      <EmployeeListItem name="Jane Smith" position="Designer" callOffice="123-579-5555" callMobile="353-666-8795" email="john@example.com" SMS="656-555-1111"/>
      <EmployeeListItem name="Sam Wilson" position="Manager" callOffice="123-579-5555"callMobile="353-666-8795"  email="john@example.com" SMS="656-555-1111"/>
      <EmployeeListItem name="John Doe" position="Developer" callOffice="123-579-5555" callMobile="353-666-8795" email="john@example.com" SMS="656-555-1111"/>
      <EmployeeListItem name="Jane Smith" position="Designer" callOffice="123-579-5555" callMobile="353-666-8795" email="john@example.com" SMS="656-555-1111"/>
      <EmployeeListItem name="Sam Wilson" position="Manager" callOffice="123-579-5555" callMobile="353-666-8795" email="john@example.com" SMS="656-555-1111"/>
    </div>
  );
};

const styles = {
  list: {
    margin: '20px auto',
    width: '50%',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
  },
};

export default EmployeeList;
