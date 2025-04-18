import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthButton from './Components/Buttons/AuthButton';

function Login() {
  const navigate = useNavigate();
  
  // Local state for form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Local state for handling errors
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`, { email, password });
      
      if (response.status === 200) {
          localStorage.setItem('token', response.data.access_token);
          console.log(response.data.message);
          navigate('/cv/list'); 
      }
      } catch (err) {
        if (err.response && err.response.data) {
          setError(err.response.data.message || 'Something went wrong');
        } else {
          setError('Login failed. Please try again.');
        }
      }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen w-screen'>
        <div className='w-full max-w-[400px] p-[30px] bg-white rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.1)]'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='true'
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='true'
              required
            />
            <AuthButton label="Login"/>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
          <div className='mt-5 text-center text-[#777]'>
            <p>
              Don't have an account? <a className='text-[#3498db] no-underline cursor-pointer' onClick={goToRegister}>Register here</a>
            </p>
          </div >
        </div>
        </div>
    </>
  );
}

export default Login;
