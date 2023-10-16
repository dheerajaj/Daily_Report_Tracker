import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-logo" to="/">My App</Link>
      <ul>
        <li>
          <Link className="navbar-link" to="/login/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/dashboard/reportsub">Report Submission</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/dashboard/list">Report List</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/dashboard/employeelist">Employee List</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
