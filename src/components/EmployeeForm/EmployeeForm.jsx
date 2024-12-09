import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./EmployeeForm.css";
import FileUpload from "../FileUpload/FileUpload";
import FormAssignment from "../FormAssignment/FormAssignment";

const EmployeeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="formassignment">
        <div
          className="form-assignment-wrapper"
          style={{ marginBottom: "100px" }}
        >
          <FormAssignment />
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="title">
            <h3 style={{ marginTop: "20px" }}>
              Tell us more about your business
            </h3>
            <p>
              Your info is like the Wi-Fi password-totally crucial fore keeping
              things running, impresessing the money floks, and making sure you
              get top-notch service without any buffering!
            </p>
          </div>
          <div className="form-detail">
            <div className="name">
              <div className="input-data">
                <label htmlFor="legal Name">
                  Legal Name <span>*</span>
                </label>
                <input type="text" placeholder="Legal Name" />
              </div>
              <div className="input-data">
                <label htmlFor="Doing business">
                  Doing business as<span>*</span>
                </label>
                <input type="text" placeholder="Doing Registeration Number" />
              </div>
            </div>

            <div className="name">
              <div className="input-data">
                <label htmlFor="Company Registration Number">
                  Company Registration Number<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Company Registration Number"
                  required
                />
              </div>
              <div className="input-data">
                <label htmlFor="Doing business">
                  Random Registration Number<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Doing Registeration Number"
                  required
                />
              </div>
            </div>

            <div className="name" id="industry">
              <div className="input-data">
                <label htmlFor="website-url">
                  Website URL <span>*</span>
                </label>
                <input
                  type="text"
                  id="website-url"
                  placeholder=" Website URL"
                  required
                />
              </div>
              <div className="input-data">
                <label htmlFor="industry">
                  Industry Name <span>*</span>
                </label>
                <select id="industry" name="industry" required>
                  <option value="">Industry Name</option>
                  <option value="startups-realm">
                    Startups Realm Technology
                  </option>
                  <option value="aitc-international">AITC International</option>
                  <option value="amoeba-labs">
                    Amoeba Labs - UX/UI Design Agency
                  </option>
                  <option value="code-avatar">CodeAvatar Tech</option>
                </select>
              </div>
            </div>

            <div className="name">
              <div className="input-data">
                <label htmlFor="random-dropdown">
                  One Random Dropdown? <span>*</span>
                </label>
                <select id="random-dropdown" name="random-dropdown" required>
                  <option value="">Options nai options</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option3">Option 4</option>
                  <option value="option3">Option 5</option>
                  <option value="option3">Option 6</option>
                </select>
              </div>

              <div className="input-data">
                <label htmlFor="dropdown-selection">
                  Which dropdown would you like to select? <span>*</span>
                </label>
                <select
                  id="dropdown-selection"
                  name="dropdown-selection"
                  required
                >
                  <option value="">More Options</option>
                  <option value="moreOption1">More Option 1</option>
                  <option value="moreOption2">More Option 2</option>
                  <option value="moreOption3">More Option 3</option>
                  <option value="moreOption3">More Option 4</option>
                </select>
              </div>
            </div>

            <div className="name">
              <div className="input-data">
                <label htmlFor="another-random-dropdown">
                  Another Random Dropdown Appears? <span>*</span>
                </label>
                <select
                  id="another-random-dropdown"
                  name="another-random-dropdown"
                  required
                >
                  <option value="">Return of the options</option>
                  <option value="return1">Return Option 1</option>
                  <option value="return2">Return Option 2</option>
                  <option value="return3">Return Option 3</option>
                </select>
              </div>
              <div className="input-data">
                <label htmlFor="account-intent">
                  Account Usage Intent <span>*</span>
                </label>
                <select id="account-intent" name="account-intent" required>
                  <option value="">Account Usage Intent</option>
                  <option value="intent1">Intent 1</option>
                  <option value="intent2">Intent 2</option>
                  <option value="intent3">Intent 3</option>
                </select>
              </div>
            </div>

            <div className="name">
              <div className="input-data">
                <label htmlFor="random-count">
                  Random count per month <span>*</span>
                </label>
                <input
                  type="number"
                  id="random-count"
                  placeholder="Put the value get the answer"
                  required
                />
              </div>
              <div className="input-data">
                <label htmlFor="total-visits">
                  Expected total visits in this page <span>*</span>
                </label>
                <input
                  type="number"
                  id="total-visits"
                  placeholder="In Number"
                  required
                />
              </div>
            </div>
            <div className="name">
              <div className="input-data">
                <label htmlFor="using-form">
                  Purpose of using fake form <span>*</span>
                </label>
                <textarea
                  id="total-visits"
                  placeholder=" Purpose of using fake form "
                  required
                  rows="6"
                />
              </div>
              <div className="input-data">
                <label htmlFor="description">
                  Ek description toh banta hai <span>*</span>
                </label>
                <textarea
                  id="description"
                  placeholder="Product Description"
                  required
                  rows="6"
                />
              </div>
            </div>

            <div className="name">
              <div className="input-data" id="contact-email">
                <label htmlFor="contact-email">
                  Contact Email <span>*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
          </div>
          <FileUpload />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EmployeeForm;
