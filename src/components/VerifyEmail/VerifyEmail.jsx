import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyEmail = () => {
  const [otpArray, setOtpArray] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(0); 
  const navigate = useNavigate();
  const location = useLocation();
  const { email, otp } = location.state || {};

  useEffect(() => {
    // Start a countdown timer for 1:39 (99 seconds) after component mounts
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
    // Reset timer and resend OTP
    setTimer(99);
  };

  if (!email || !otp) {
    return <p>Error: Email or OTP missing. Please go back and re-enter.</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Verify OTP</h2>
      <p>Please enter the 6-digit code we just sent to: {email}</p>
      <form onSubmit={handleVerify} style={styles.form}>
        <div style={styles.otpContainer}>
          {otpArray.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              style={styles.otpInput}
            />
          ))}
        </div>
        <button type="submit" style={styles.button}>
          Verify OTP
        </button>
      </form>

      <div style={styles.resendContainer}>
        {timer > 0 ? (
          <p>Wait {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60} before requesting a new code.</p>
        ) : (
          <button onClick={handleResendOtp} style={styles.resendButton}>
            Didn't receive a code? Resend Code
          </button>
        )}
      </div>

      <div style={styles.termsContainer}>
        <p>
          By continuing, you're agreeing to Nobody's <a href="/terms">Terms of Service</a>, <a href="/privacy">Privacy Policy</a>, and <a href="/cookies">Cookie Policy</a>.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  otpContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "1rem",
  },
  otpInput: {
    width: "40px",
    height: "40px",
    textAlign: "center",
    fontSize: "1.2rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  resendContainer: {
    marginTop: "1rem",
    textAlign: "center",
  },
  resendButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  },
  termsContainer: {
    marginTop: "2rem",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#555",
  },
};

export default VerifyEmail;
