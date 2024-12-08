import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const SignUP = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    alert(`OTP has been sent to ${email}. Check your inbox.`); 
    alert(`Simulating OTP send to: ${email}, OTP: ${otp} and also check console`);
    console.log(`Simulating OTP send to: ${email}Your OTP: ${otp}`);
    
    navigate("/verify-email-with-otp", { state: { email, otp } });
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit} className="form">
        <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" required/>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
          className="input-data"
          />
        <button type="submit" className="submit-btn">
          Send OTP
        </button>
      </form>
    </div>
      <Footer/>
          </>
  );
};

export default SignUP;
