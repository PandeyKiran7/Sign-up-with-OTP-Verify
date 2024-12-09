import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/sign-up"); 
  };

  return (
    <div className="home">
      <Navbar />
      <header className="home-header">
        <h1>Welcome to Our Platform</h1>
        <p>Experience the best services tailored just for you. Sign up today to get started!</p>
      </header>
      <main>
        <section className="cta-section">
          <h2>Ready to Join?</h2>
          <p>Sign up today and experience the difference.</p>
          <button className="cta-button" onClick={handleSignUp}>
            Sign Up Now
          </button>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
