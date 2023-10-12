
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../pages/login.css';

 

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {

    const { name, value } = e.target;

    setData((prevData) => ({

      ...prevData,

      [name]: value,

    }));

  };
  const headers = {

    'Content-Type' : 'application/json',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(

        'http://localhost:8000/api/v1/login', data,{headers});

      if (response.status === 200) {
        // alert('Login successful');
        toast.success('Login successful');
        navigate('/login/dashboard');

      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      alert('Invalid Username or password.');
    }
  };

  return (
<div id='i'>
<ToastContainer position='bottom-right' />
<div className='form-container' style={{ marginTop: '-352px' }}>

<h1 className='text-center' style={{ color: '#0275d8' }}>Login</h1>
<form onSubmit={handleSubmit}>
<label htmlFor='username'>Email:</label>
      <input
            type='text'
            name='email'
            id='email'
            require
            placeholder='Enter your Email'
            value={data.email}
            onChange={handleChange}
          />

<label htmlFor='password'>Password:</label>
        <input
              type='password'
              name='password'
            id='password'
            required
            placeholder='Enter your password'
            value={data.password}
            onChange={handleChange}
          />
          <button type='login'>Login</button>
    </form>
          <Link to='/register'><p>Don't have Account..!</p></Link>
      </div>
      </div>
  );
}
export default Login;
























































// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../pages/login.css';

// function Login() {
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   });

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         'http://192.168.68.36:8000/api/v1/login',
//         data,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

 
//       if (response.status === 200) {
//         setIsLoggedIn(true);
//         alert('Login successful');


//         navigate('/login/dashboard');
//       } else {
//         alert('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       alert('Invalid Username or password.');
//     }
//   };

 

//   return (
// <div id='i'>
// <div className='form-container' style={{ marginTop: '-352px' }}>
// <h1 className='text-center' style={{ color: '#0275d8' }}>
//           Login
// </h1>
// <form >
// <label htmlFor='email'>Email:</label>
// <input
//             type='text'
//             name='email'
//             id='email'
//             required
//             placeholder='Enter your Email'
//             value={data.email}
//             onChange={handleChange}
//           />
// <label htmlFor='password'>Password:</label>
// <input
//             type='password'
//             name='password'
//             id='password'
//             required
//             placeholder='Enter your password'
//             value={data.password}
//             onChange={handleChange}
//           />
//           <button type='login'>Login</button>

// </form>
//  <Link to='/register'><p>Don't have Account..!</p></Link>
// </div>
// </div>
//   );
// }

 

// export default Login;







// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../pages/login.css'

 
// function Login() {
//   const [data, setData] = useState({
//     username: '', // Changed from 'email'
//     password: '',
//   });


//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://192.168.1.2:8000/api/login/', data, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         setIsLoggedIn(true);
//         alert('Login successful');
//         navigate('/login/dashboard');
//       } else {
//         alert('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       alert('Invalid Username or password.');
//     }
//   };

 

//   return (
// <div id='i'>

// <div className='form-container' style={{marginTop:"-352px"}}>
// <h1 className='text-center' style={{ color: '#0275d8' }}>Login</h1>
// <form onSubmit={handleSubmit}>
// <label htmlFor='username'>Username:</label>
// <input
//               type='text' 
//               name='username'
//               id='username'
//               required
//               placeholder='Enter your Username'
//               value={data.username}
//               onChange={handleChange}
//             />
// <label htmlFor='password'>Password:</label>
// <input
//               type='password'
//               name='password'
//               id='password'
//               required
//               placeholder='Enter your password'
//               value={data.password}
//               onChange={handleChange}
//             />
// <button type='submit'>Login</button>
// </form>
// </div>
// </div>

//   );
// }

 

// export default Login;
















// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './login.css';

// function Login() {
//   const [data, setData] = useState({
//     username: '',
//     password: '',
//   });

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const headers = {
//     'Content-Type': 'application/json',
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://192.168.68.23:8000/api/login/', data, { headers });

//       if (response.data.success) {
//         setIsLoggedIn(true);
//         alert('Login successful');
//         navigate('/login/dashboard');
//       } else {
//         alert('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       alert('Invalid Username or password..');
//     }
//   };

//   return (
//     <div>
//       <div className='container' id='i'>
//         <div className='form-container'>
//           <h1 className='text-center' style={{ color: '#0275d8' }}>Login</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor='username'>Username:</label>
//             <input
//               type='username'
//               name='username'
//               id='username'
//               required
//               placeholder='Enter your Username'
//               value={data.username}
//               onChange={handleChange}
//             />

//             <label htmlFor='password'>Password:</label>
//             <input
//               type='password'
//               name='password'
//               id='password'
//               required
//               placeholder='Enter your password'
//               value={data.password}
//               onChange={handleChange}
//             />
//             <button type='submit'>Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



















// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './login.css';

// function Login() {
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   });

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

// const headers = {
//   'Content-Type': 'application/json',
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post('',FormData, { headers});

//     if(response.data.success) {
      
//       setIsLoggedIn(true);
//       alert('Login successful');

//       navigate('/login/dashboard');
//      } 
//      else 
//        {
//        alert('Login failed. Please check your credentials.');
//       }
//     }

//     catch (error) {
//       alert("Invalid username or password..");
//     }
// }



//   // // HTTPS headers for the axios request
//   // const headers = {
//   //   'Content-Type': 'application/json',
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const { email, password } = data;

//   //   // Simulated authentication logic (replace with actual authentication)
//   //   if (email && password) {
//   //     setIsLoggedIn(true);
//   //     alert('Login successful');
      
//   //     // Navigate to the home page ("/") after successful login
//   //     navigate('/login/dashboard');
//   //   } else {
//   //     alert('Login failed. Please check your credentials.');
//   //   }
//   // };

//   // if (isLoggedIn) {
//   //   // If the user is logged in, the navigate function will redirect them
//   //   return null; // You can return null or any other content you want in this case
//   // }

//   return (
//     <div>
//       <div className='container' id='i'>
//         <div className='form-container'>
//           <h1 className="text-center" style={{ color: '#0275d8' }}>Login</h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               placeholder="Enter your Email"
//               value={data.email}
//               onChange={handleChange}
//             />

//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               required
//               placeholder="Enter your password"
//               value={data.password}
//               onChange={handleChange}
//             />
//             <button type='submit'>Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;




