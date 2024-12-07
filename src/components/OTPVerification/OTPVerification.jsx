import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    
    if (otp === "123456") {
      console.log("OTP Verified for email:", email);
      navigate("/next-form");
    } else {
      alert("Invalid OTP");
    }
  };

  if (!email) {
    return <p>Error: No email provided. Go back and enter your email.</p>;
  }

  return (
    <div>
      <h2>Verify OTP</h2>
      <p>OTP has been sent to: {email}</p>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter OTP"
          required
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default VerifyOTP;
