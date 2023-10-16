import React from 'react';
import Login from './Login';
import '../pages/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <div className="navbar">
      <div className="title">Daily Report Tracker</div>
      <div className="button-container">
        <Link to='/register'>
          <button className="button">Register</button>
        </Link>
        <Link to='/contact-us'>
          <button className="button">Contact Us</button>
        </Link>
      </div>
    </div>
    <div>
    <Login></Login>
    </div>
    </div>



  );
}

export default Home;
