
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
    const [error, setError] = useState('');
    const navigate = useNavigate();

    //   const handleChange = (e) => {
    //    const { name, value } = e.target;
    //     setData((prevData) => ({
    //       ...prevData,
    //       [name]: value,
    //     }));
    //   };
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
            const response = await axios.post('http://localhost:8000/api/v1/login', data, { headers });
            if (response.status === 200) {
                // alert('Login successful');
                toast.success('Login successful');
                console.log('Logged In')
                navigate('/login/dashboard');

            } else {
                toast.error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            setError('Invalid Username or password.');
        }
    };

    return (
        <>
            <ToastContainer position='top-right' />
            <div className='log-div'>
          

                <form className='log-form' onSubmit={handleSubmit}>
                    <div>
                   
                    <img className='log-logo' src="https://drive.google.com/uc?id=1D9XAJYiZGmTaU6CIyx-NIW44JL4cp1AM" alt=''></img>

                        <input
                            className='log-user'
                            placeholder='Email'
                            type="text"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='log-pass'
                            placeholder='Password'
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='login'>Login</button>
                    {error && <p>{error}</p>}
                </form>
                <Link to='/register'><p>Don't have Account..!</p></Link>
            </div>
        </>
    );
}
export default Login;
