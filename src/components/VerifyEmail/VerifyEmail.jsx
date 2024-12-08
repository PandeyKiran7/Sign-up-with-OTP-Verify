import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./verifyEmail.css";

const VerifyEmail = () => {
  const [otpArray, setOtpArray] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { email, otp } = location.state || {};

  useEffect(() => {
    if (timer === 0) {
      setTimer(99);
      const countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(countdown);
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
  }, [timer]);

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (!/^\d*$/.test(value)) return;

    const updatedOtpArray = [...otpArray];
    updatedOtpArray[index] = value.slice(-1);
    setOtpArray(updatedOtpArray);

    if (value && index < otpArray.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();

    const enteredOtp = otpArray.join("");
    if (enteredOtp === otp) {
      console.log(`OTP Verified for email: ${email}`);
      alert("OTP Verified Successfully!");
      navigate("/employee-form");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = () => {
    alert("OTP has been resent to your email.");
    setTimer(99);
  };

  if (!email || !otp) {
    return (
      <>
        <Navbar />
        <p className="error">Error: Email or OTP missing. Please go back and re-enter.</p>
        <Footer/>
      </>
    );
  }

  return (
    <>
    <Navbar/>
      <div className="verify-email-container">
        <h2>Verify OTP</h2>
        <p>Please enter the 6-digit code we just sent to: {email}</p>
        <form onSubmit={handleVerify} className="verify-email-form">
          <div className="otp-container">
            {otpArray.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                className="otp-input"
              />
            ))}
          </div>
          <button type="submit" className="verify-button">
            Verify OTP
          </button>
        </form>

        <div className="resend-container">
          {timer > 0 ? (
            <p>
              Wait {Math.floor(timer / 60)}:
              {timer % 60 < 10 ? `0${timer % 60}` : timer % 60} before requesting a new code.
            </p>
          ) : (
            <button onClick={handleResendOtp} className="resend-button">
              Didn't receive a code? Resend Code
            </button>
          )}
        </div>

        <div className="terms-container">
          <p>
            By continuing, you're agreeing to Nobody's{" "}
            <a href="/terms">Terms of Service</a>, <a href="/privacy">Privacy Policy</a>, and{" "}
            <a href="/cookies">Cookie Policy</a>.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default VerifyEmail;