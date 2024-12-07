import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const EmailInput = () => {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event)=> {
      event.preventDefault();
      console.log("Sending OTP to:", email);
      navigate("/verify-otp", {state:{email}});
  };

  const handleEmailChange = (e) => {
      setEmail(e.target.value)
  };

  return (
    <>
      <div className="email">
        <h2>Enter Your Email</h2>
        <form onSubmit={handleSubmit}>

          <input type="email" value={email} placeholder="Enter your email" onChange={handleEmailChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EmailInput;