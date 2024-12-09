import React from "react";
import "./FormAssignment.css";

export const FormAssignment = () => {
  return (
    <div className="form-container">
        <h2>Multi-Step Process Form Assignment</h2>
      <div className="range-container">
        <div className="ellipse completed">
          <span className="ellipse-label">Business Type</span>
        </div>
        <div className="ellipse active">
          <span className="ellipse-label" style={{color:"black"}}>Business Details</span>
        </div>
        <div className="ellipse">
          <span className="ellipse-label">Authorized Respresentative</span>
        </div>
        <div className="ellipse">
          <span className="ellipse-label">Business Owners</span>
        </div>
        <div className="ellipse">
          <span className="ellipse-label">Company Directors</span>
        </div>
        <div className="ellipse">
          <span className="ellipse-label">Support Information</span>
        </div>
        <div className="ellipse">
          <span className="ellipse-label">Add Details</span>
        </div>
        <div className="ellipse">
          <span className="ellipse-label">Complete Registration</span>
        </div>
      </div>
    </div>
  );
};

export default FormAssignment;
