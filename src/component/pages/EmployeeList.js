import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import './Employeelist.css'; // Import your CSS file

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the list of employees from your API endpoint.
    axios.get('http://localhost:8000/api/v1/users')
      .then(response => {
        // Update the state with the fetched employee data.
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch employee data:', error);
      });
  }, []);

  return (
    <div >
      <Navbar />
      <div className="EmployeeList">
      <h1 className='list'>Employee List</h1>
      <ul className='ulist'>
        {employees.map(employee => (
          <li className='Llist' key={employee.id}>
          <img src={employee.image} alt='Profile'></img>
            <strong>First Name:</strong> {employee.firstname}<br />
            <strong>Last Name:</strong> {employee.lastname}<br />
            <strong>Email:</strong> {employee.email}<br />
            <strong>Contact:</strong> {employee.contact}<br />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default EmployeeList;
