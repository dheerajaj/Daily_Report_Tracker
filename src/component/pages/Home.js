import React from 'react';
import Navbar from '../Navbar';
import bg from './bg.png';
import Login from './Login';
import '../pages/home.css';
import '../Navbar.css'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className='navigation-home'>
      <header className='Nheader'>
          <img
            id='logo'
            src='https://media.designrush.com/agencies/326665/conversions/AHOM-Technologies-logo-profile.jpg'
            height={'68px'}
            width={'168px'}
            border-radius={'25px'}
            alt='Logo'
          />
          <h1 id="h1">Daily Report Tracker</h1>
          
          <nav className='Nnav'>
            <ul className='Nul'>
              <li className='Nli'>
                <Link to='/register'>
                  <button>Register</button>
                </Link>
              </li>
              <li className='Nli'>
                <Link to='/contact-us'>
                  <button>ContactUs</button>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className='bg'>
        <img
          src={bg}
          style={{
            height: '430px',
            width: '626px',
            display: 'flex',
            justifyContent: 'left',
            margin: 'auto',
            marginRight: '2rem',
          }}
          alt="Background Image"
        />
        <Login></Login>
      </div>
    </div>
  );
}

export default Home;
