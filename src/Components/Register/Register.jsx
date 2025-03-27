import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthButton from '../Buttons/AuthButton';
import { GlobalStyle, MainContent, FormContainer, FooterText } from '../../GlobalStyles';


function Login() {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <>
    <GlobalStyle/>
      <MainContent>
        <FormContainer>
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Full Name" autoComplete='false' required />
            <input type="email" placeholder="Email" autoComplete='true' required />
            <input type="password" placeholder="Password" autoComplete='true' required />
            <input type="password" placeholder="Confirm Password" autoComplete='true' required />
            <AuthButton label="Register"/>
          </form>
          <FooterText>
            <p>
            Already have an account? <a onClick={goToLogin}>Login here</a>
            </p>
          </FooterText>
        </FormContainer >
      </MainContent>
    </>
  );
}

export default Login;