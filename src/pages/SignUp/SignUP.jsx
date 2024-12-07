import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUP = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    console.log(`Simulating OTP send to: ${email}, OTP: ${otp}`);
    alert(`OTP has been sent to ${email}. Check your inbox.`); 
    
    navigate("/verify-email-with-otp", { state: { email, otp } });
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Send OTP
        </button>
      </form>
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
  input: {
    padding: "0.5rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    width: "200px",
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
};

export default SignUP;
