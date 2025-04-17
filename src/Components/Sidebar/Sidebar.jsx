import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/axiosInstance';

const SidebarStyle = styled.div`
  width: 250px;
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 30px;
    justify-self: start;
    margin-bottom: 20vh;
  }

  nav {
    justify-self: center;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav ul li {
    margin-bottom: 15px;
  }

  nav ul li a,
  nav ul li button {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 1.1rem;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    transition: color 0.3s ease;
  }

  nav ul li a:hover,
  nav ul li button:hover {
    color: #3498db;
  }
`;

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
  
    try {
      await api.post('/api/logout', {});
      localStorage.removeItem('token'); // Clear the token
      navigate('/'); // Redirect to login
    } catch (error) {
      if (error.response) {
        console.error('Logout failed:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
  };
  

  return (
    <SidebarStyle>
      <h2>CV Crud</h2>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/cv/list">Application list</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
    </SidebarStyle>
  );
}

export default Sidebar;
