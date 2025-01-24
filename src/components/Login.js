// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/todo'); // or "/home", whichever you prefer
    } else {
      alert('Invalid credentials. Please register or try again.');
    }
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: '80vh' }}
    >
      <h2 className="mb-4 text-center">Login</h2>
      <form
        onSubmit={handleLogin}
        className="text-center p-4 shadow-sm bg-white"
        style={{ borderRadius: '8px', maxWidth: '400px', width: '100%' }}
      >
        <div className="mb-3 text-start">
          <label className="form-label fw-bold">Username</label>
          <input
            type="text"
            className="form-control"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label fw-bold">Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Sign In
        </button>
        <div className="mt-3">
          <button className="btn btn-link" onClick={() => navigate('/register')}>
            Create new account?
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
