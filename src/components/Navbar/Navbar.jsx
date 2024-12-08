import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src= {logo} alt="logo" />
      </div>
      
      <div className="navbar-element">
      <NavLink to="/"  className={"nav-field"}>
        Home
      </NavLink>
      <NavLink to="/verify-email-with-otp" className={"nav-field"}>
        VerifyEmail
      </NavLink>
      <NavLink to="/employee-form" className={"nav-field"} >
        Employee Form
      </NavLink>
      <NavLink to="/sign-up" className={"nav-field"}  >
        Sign Up
      </NavLink>
      </div>
    </nav>
  );
};



export default Navbar;
