// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark navbar-custom ${
        theme === 'dark' ? 'dark' : ''
      }`}
      style={{ padding: '1rem' }}
    >
      <div className="container-fluid">
        <motion.div
          className="navbar-brand fs-3 fw-bold"
          whileHover={{ scale: 1.1 }}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          MyTasks
        </motion.div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
          aria-controls="myNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              style={{ marginLeft: '1rem' }}
            >
              <Link className="nav-link" to="/todo">
                To-do
              </Link>
            </motion.li>
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              style={{ marginLeft: '1rem' }}
            >
              <Link className="nav-link" to="/calendar">
                Calendar
              </Link>
            </motion.li>
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              style={{ marginLeft: '1rem' }}
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </motion.li>
          </ul>

          <div className="d-flex align-items-center">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn btn-outline-light me-3"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </motion.button>
            {/* Logout */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn btn-warning"
              onClick={handleLogout}
            >
              Logout
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
