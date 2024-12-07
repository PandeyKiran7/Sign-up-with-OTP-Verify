import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/sign-up"  >
        Sign Up
      </NavLink>
      <NavLink to="/verify-otp">
        Verify OTP
      </NavLink>
      <NavLink to="/next-form" >
        Next Form
      </NavLink>
    </nav>
  );
};



export default Navbar;
