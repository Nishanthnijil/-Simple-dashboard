
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login';
import OtpVerify from './Components/OtpVerify';
import Dashboard from './Components/Dashboard';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return (
    <>
      <Router>
        <div>
          {/* Toast Notifications */}
          <ToastContainer />

          {/* App Routes */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/otp-verify" element={<OtpVerify />} />
            {/* Protected Route */}
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
