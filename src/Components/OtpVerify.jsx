import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const OtpVerify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, otp } = location.state || {};
  const [userOtp, setUserOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const otpSentRef = useRef(false);

  const sendOtpEmail = () => {
    if (otpSentRef.current) {
      return;
    }

    emailjs
      .send(
        'service_tm7jqfo', 
        'template_f3jw6gn', 
        {
          to_email: email,
          otp: otp,
        },
        'SWDBq1p1xbS0M1r-r' 
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          toast.success(`OTP sent to ${email}!`);
          otpSentRef.current = true;
        },
        (error) => {
          console.error('Failed to send OTP:', error);
          toast.error('Failed to send OTP. Please try again.');
        }
      );
  };

  useEffect(() => {
    if (email && otp && !otpSentRef.current && !isVerified) {
      sendOtpEmail();
      otpSentRef.current = true;
    }
  }, [email, otp, isVerified]);

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (userOtp === otp) {
      setIsVerified(true);
      toast.success('OTP verified successfully!');

      localStorage.setItem('isAuthenticated', 'true');

      setTimeout(() => {
        navigate('/dashboard', { state: { email } });
      }, 1000);
    } else {
      toast.error('Invalid OTP. Please try again.');
    }
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
            <div className="row">
              <div className="col sign-in-content">
                <div className="row">
                  <div className="col pt-5 pb-5 d-flex justify-content-center">
                    <span className="header-content">Enter OTP sent to Email</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col d-flex justify-content-center">
                    <input
                      className="input-content form-control"
                      style={{ width: "100%" }}
                      type="text"
                      value={userOtp}
                      onChange={(e) => setUserOtp(e.target.value)}
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                  <div className="col-2"></div>
                </div>
                <div className="row">
                  <div className="col pt-5 pb-5 d-flex justify-content-center">
                    <button className="btn-class" onClick={handleVerifyOtp}>
                      Validate
                    </button>
                  </div>
                </div>
              </div>
              <div className="col subtitles d-flex justify-content-center align-items-center">
                <span>Web Application with Analytics Dashboard</span>
              </div>
            </div>
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

export default OtpVerify;
