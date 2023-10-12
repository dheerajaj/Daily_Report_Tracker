  import React from 'react';
  import { Link } from 'react-router-dom';

  
  function Navbar() {
    return (
      <div>
        <header>
        <nav>
          <ul>
          <li>
            <Link to='/login/dashboard'>Dashboard</Link>
          </li>
            <li>
              <Link to="/dashboard/reportsub">Report Submission</Link>
            </li>
            <li>
              <Link to="/dashboard/list">List</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
            <li>
              <Link to="/dashboard/employeelist">EmployeeList</Link>
            </li>
          </ul>
        </nav>
      </header>
      </div>
    );
  }
  
  export default Navbar;
  









