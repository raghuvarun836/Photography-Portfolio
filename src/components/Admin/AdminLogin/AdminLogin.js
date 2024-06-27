import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import axios from 'axios';
import AdminLayout from '../../../Layouts/AdminLayout/AdminLayout';
import Cookies from 'js-cookie';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://photography-portfolio-gk9f.onrender.com/api/admin/login', { username, password });
      const token = response.data;
      console.log(response);
      Cookies.set('adminToken', token, { "expires" : 1 });
      navigate('/admin/dashboard'); // Use navigate instead of history.push
    } catch (error) {
      console.error('Login Error:', error);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <AdminLayout>
      <div className="login-page">
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        <form id="loginForm" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
      </div>
    </AdminLayout>
  );
};

export default AdminLogin;