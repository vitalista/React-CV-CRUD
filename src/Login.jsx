import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthButton from './Components/Buttons/AuthButton';
import { GlobalStyle, MainContent, FormContainer, FooterText } from './GlobalStyles';

function Login() {
  const navigate = useNavigate();
  
  // Local state for form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Local state for handling errors
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default behavior

    try {
      const response = await axios.post('http://localhost:8000/api/login', { email, password });
      
      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        navigate('/home');
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
      <GlobalStyle/>
      <MainContent>
        <FormContainer>
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
          <FooterText>
            <p>
              Don't have an account? <a onClick={goToRegister}>Register here</a>
            </p>
          </FooterText>
        </FormContainer>
      </MainContent>
    </>
  );
}

export default Login;
