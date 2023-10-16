import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';
import './background-animation.css';

function Register() {
  const [data, setData] = useState({
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    contact: '',
  });
  const [imageFile, setImageFile] = useState(null); // State for handling the image file
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      formData.append('firstname', data.firstname);
      formData.append('lastname', data.lastname);
      formData.append('email', data.email);
      formData.append('contact', data.contact);
      formData.append('password', data.password);

      const response = await axios.post('http://localhost:8000/api/v1/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 'ok') {
        console.warn('data sent');
      }

      setData({
        password: '',
        email: '',
        firstname: '',
        lastname: '',
        contact: '',
      });

      if (data.password) {
        toast.success('Registered Successfully');
        navigate('/login');
      }
    } catch (error) {
      console.log('Registration failed. Please try again.', error);
    }
  };


  return (
    <div>
    <ToastContainer position='top-right' />
      <div className="container1">
        <div className="form-container1">
          <h1 style={{ color: '#0275d8' }}>Registration Page</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              required
              placeholder="Enter your fname"
              value={data.firstname}
              onChange={handleChange}
            />

            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              placeholder="Enter your lname"
              value={data.lastname}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your Email"
              value={data.email}
              onChange={handleChange}
            />
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              name="contact"
              id="contact"
              required
              placeholder="Enter your Contact"
              value={data.contact}
              onChange={handleChange}
            />
            <label htmlFor="image">Profile Image:</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              onChange={handleImageChange}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password1"
              required
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
          <Link to="/">Go Back To Login Page</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
