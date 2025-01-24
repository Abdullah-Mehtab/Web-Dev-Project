// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './components/Login';
import Register from './components/Register';
import ToDo from './pages/ToDo';
import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* Use a flex container to push Footer to bottom */}
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Navbar at top */}
          <Navbar />

          {/* Main content in flex:1 to push footer down */}
          <div style={{ flex: 1 }}>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected routes */}
              <Route
                path="/todo"
                element={
                  <ProtectedRoute>
                    <ToDo />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/calendar"
                element={
                  <ProtectedRoute>
                    <Calendar />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />              
              <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            </Routes>
          </div>

          {/* Footer at the bottom */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
