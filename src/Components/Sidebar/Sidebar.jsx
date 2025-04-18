import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/axiosInstance';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/api/logout', {});
      localStorage.removeItem('token');
      navigate('/');
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
    <div className="w-[250px] bg-[#2c3e50] text-white p-5 h-screen flex flex-col sticky top-0">
      <h2 className="text-2xl text-white mb-[20vh]">CV CRUD</h2>
      <nav>
        <ul className="list-none p-0">
          <li className="mb-4">
            <Link
              to="/"
              className="text-[#ecf0f1] text-lg hover:text-[#3498db] transition-colors duration-150"
            >
              Login
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/register"
              className="text-[#ecf0f1] text-lg hover:text-[#3498db] transition-colors duration-150"
            >
              Register
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/cv/list"
              className="text-[#ecf0f1] text-lg hover:text-[#3498db] transition-colors duration-150"
            >
              Application list
            </Link>
          </li>
          <li className="mb-4">
            <button
              onClick={handleLogout}
              className="text-[#ecf0f1] text-lg hover:text-[#3498db] transition-colors duration-150 bg-none border-none p-0 cursor-pointer font-inherit"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
