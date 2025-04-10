import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  nav ul li a {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }

  nav ul li a:hover {
    color: #3498db;
  }
`;

function Sidebar() {
  return (
    <SidebarStyle>
      <h2>Laravel-React</h2>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/cv/list">CV list</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </SidebarStyle>
  );
}

export default Sidebar;