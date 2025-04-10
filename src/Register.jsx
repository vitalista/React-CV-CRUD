import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthButton from './Components/Buttons/AuthButton';
import { GlobalStyle, MainContent, FormContainer, FooterText } from './GlobalStyles';

axios.defaults.withCredentials = true; // Required for Sanctum cookie-based auth

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Step 1: Get CSRF cookie
      // await axios.get('http://localhost:8000/sanctum/csrf-cookie');

      // Step 2: Register
      const response = await axios.post('http://localhost:8000/api/register', formData);


      if (response.status === 200) {
        navigate('/');
        console.log(response.data.message);
      }

      // navigate('/');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Something went wrong');
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <>
      <GlobalStyle />
      <MainContent>
        <FormContainer>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
              autoComplete="new-password"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
            />
            <AuthButton label="Register" />
          </form>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <FooterText>
            <p>
              Already have an account? <a onClick={goToLogin} style={{ cursor: 'pointer' }}>Login here</a>
            </p>
          </FooterText>
        </FormContainer>
      </MainContent>
    </>
  );
}

export default Register;
