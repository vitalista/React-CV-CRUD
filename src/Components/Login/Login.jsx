import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthButton from '../Buttons/AuthButton';
import { GlobalStyle, MainContent, FormContainer, FooterText } from '../../GlobalStyles';


function Login() {

  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <>
    <GlobalStyle/>
      <MainContent>
        <FormContainer>
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" autoComplete='true' required />
            <input type="password" placeholder="Password" autoComplete='true' required />
            <AuthButton label="Login"/>
          </form>
          <FooterText>
            <p>
              Don't have an account? <a onClick={goToRegister}>Register here</a>
            </p>
          </FooterText>
        </FormContainer >
      </MainContent>
    </>
  );
}

export default Login;