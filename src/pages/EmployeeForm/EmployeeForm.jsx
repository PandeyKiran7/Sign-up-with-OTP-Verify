import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./EmployeeForm.css"

const EmployeeForm = () => {

  const handleSubmit = (e) => {
      e.preventDefault();
  }
  return (
<>
      <Navbar/>
    <div className="formassignment">
      <h2 className="form-topic">Multi-Step Process From Assignment</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="title">
        <h3>Tell us more about your business</h3>
      <p>Your info is like the Wi-Fi password-totally crucial fore keeping things running, impresessing the money floks, and making sure you
      get top-notch service without  any buffering!</p>
        </div>
        <div className="form-detail">

        <div className="name">
          <div className="input-data">
          <label htmlFor="legal Name">Legal Name <span>*</span></label>
          <input type="text" placeholder="Legal Name" />
          </div>
          <div className="input-data">
          <label htmlFor="Doing business">Doing business as<span>*</span></label>
          <input type="text" placeholder="Doing Registeration Number" />
          </div>
        </div>

        <div className="name">
        <div className="input-data">
          <label htmlFor="Company Registration Number">Company Registration Number<span>*</span></label>
          <input type="text" placeholder="Company Registration Number" required/>
          </div>
          <div className="input-data">
          <label htmlFor="Doing business">Rando Registration Number<span>*</span></label>
          <input type="text" placeholder="Doing Registeration Number" required/>
          </div>
        </div>

        </div>
       
      </form>
     
    </div>
    <Footer/>
    </>
  );
};

export default EmployeeForm;
