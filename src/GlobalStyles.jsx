import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

#root{
  width: 100vw;
  align-items: flex-start;
  height: 100%;
}

.flex{
  display: flex;
}

.between{
  justify-content: space-between;
}

.end{
  justify-content: end;
}

a{
  color: #3498db;
  text-decoration: none;
}

`;

const FooterText = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #777;

  a {
    color: #3498db;
    text-decoration: none;
    cursor: pointer;
  }
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border 0.3s ease;
  }

  input:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 20px;
  margin: 30px;
  overflow-y: auto;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export { GlobalStyle, FooterText, MainContent, FormContainer, Card };
