// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('users')) || [];
    if (existing.some((u) => u.username === username)) {
      alert('Username already exists. Choose another.');
      return;
    }
    existing.push({ username, password });
    localStorage.setItem('users', JSON.stringify(existing));
    alert('Registration successful! Now you can login.');
    navigate('/');
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: '80vh' }}
    >
      <h2 className="mb-4 text-center">Register</h2>
      <form
        onSubmit={handleRegister}
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
        <button className="btn btn-success w-100" type="submit">
          Sign Up
        </button>
        <div className="mt-3">
          <button className="btn btn-link" onClick={() => navigate('/')}>
            Already have an account?
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
