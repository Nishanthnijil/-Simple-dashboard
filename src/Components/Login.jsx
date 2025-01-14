

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (localStorage.getItem('isAuthenticated')) {
      navigate('/dashboard');
    }
  }, []);

  // Function to generate a 6-digit OTP
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('A valid email is required');
      return;
    }

    // Generate OTP and navigate to OtpVerify.jsx
    const otp = generateOtp();
    toast.success(`Hi, User, please verify your email.`);
    setTimeout(() => {
      navigate('/otp-verify', { state: {email, otp } });
    }, 2000);
  };

  return (
    <div className='background-class page-size'>
    <div className="container-fluid">
      <div className="row header">
        <div className="col p-0"></div>
        <div className="col p-0 d-flex justify-content-center align-items-center">
          <span className="page-title">Analytics Dashboard</span>
        </div>
        <div className="col p-0"></div>
      </div>
      <div className="row content align-items-center">
        <div className="col-2"></div>
        <div className="col login-content p-0">
      <form onSubmit={handleSubmit}>
      <div className="row">
              <div className="col sign-in-content">
                <div className="row">
                  <div className="col pt-5 pb-5 d-flex justify-content-center">
                    <span className="header-content">Sign In</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col d-flex justify-content-center">
          <input
            className="input-content"
            type="email"
            id="email"
            value={email}
            style={{width: "100%"}}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            />      
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col pt-5 pb-5 d-flex justify-content-center">
            <button type="submit" className="btn-class">Send OTP</button>
                  </div>
                </div>
              </div>
              <div className="col subtitles d-flex justify-content-center align-items-center">
              <span>Web Application with Analytics Dashboard</span>
              </div>
            </div>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row footer">
          <div className="col p-0"></div>
          <div className="col p-0 d-flex justify-content-center">
            <span className="pt-1 page-footer-text">© 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.</span>
          </div>
          <div className="col p-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
