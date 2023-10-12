

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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.warn(data);
      const response = await axios.post('http://localhost:8000/api/v1/register', data);
      console.log(response.data);

      if (response.status === 'ok') {
        console.warn('data send');
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















































































































// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './register.css';
// import './background-animation.css';

// function Register() {
//   const [data, setData] = useState({
//         password: '',
//         email: '',
//         firstname: '',
//         lastname: '',
//         contact: '',
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const headers = {
//     'Content-Type': 'application/json',
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.warn(data);
//       const response = await axios.post('http://192.168.68.36:8000/api/v1/register', data);
//       console.log(response.data);

//       if(response.status==="ok"){
//         console.warn("data send");
        
//       }
//       setData({
//         password: '',
//         email: '',
//         firstname: '',
//         lastname: '',
//         contact: '',
//       });

//       if (data.password) {
//         alert("Registerd Successfully")
//          navigate('/login');
//       }
      
//     } 
//     catch (error) {
//       console.log('Registration failed. Please try again.', error);
//     }
//   };

//   return (
//     <div>
//       <div className='container1'>
//         <div className='form-container1'>
//           <h1 style={{ color: '#0275d8' }}>Registration Page</h1>
//           <form onSubmit={handleSubmit}>
//              <label htmlFor='firstname'>First Name:</label>
//             <input
//               type='text'
//               name='firstname'
//               id='firstname'
//               required
//               placeholder='Enter your fname'
//               value={data.firstname}
//               onChange={handleChange}
//             />

//             <label htmlFor='lastname'>Last Name:</label>
//             <input
//               type='text'
//               name='lastname'
//               id='lastname'
//               required
//               placeholder='Enter your lname'
//               value={data.lastname}
//               onChange={handleChange}
//             /> 

//             <label htmlFor='email'>Email:</label>
//             <input
//               type='email'
//               name='email'
//               id='email'
//               required
//               placeholder='Enter your Email'
//               value={data.email}
//               onChange={handleChange}
//             />
//             <label htmlFor='contact'>Contact:</label>
//             <input
//               type='text'
//               name='contact'
//               id='contact'
//               required
//               placeholder='Enter your Contact'
//               value={data.contact}
//               onChange={handleChange}
//             />

//             <label htmlFor='password'>Password:</label>
//             <input
//               type='password'
//               name='password'
//               id='password1'
//               required
//               placeholder='Enter your password'
//               value={data.password}
//               onChange={handleChange}
//             />


//             <button type='submit'>Submit</button>
//           </form>
//           <Link to='/'>Go Back To Login Page</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;







