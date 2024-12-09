import React from "react";
import "./CardLayout.css";

const CardLayout = () => {
  return (
    <div className="card-layout">
      <div className="back-arrow">
        <i className="fa-solid fa-arrow-left"></i>
        <p>Back</p>
      </div>
      <h2 style={{ color: "white", marginLeft: "35%", padding: "20px" }}>
        Layout Cards
      </h2>

      <div className="cards">
        <div className="card" id="Singapore">
          <img src="https://flagcdn.com/sg.svg" alt="Singapore Flag" />
          <h3>Singapore</h3>
          <p>Regional office</p>
          <div className="card-details">
            <p>XYZ Pvt. Ltd</p>
            <p>
              Road to nowhere, 06-404, 500 Internal <br /> Error
            </p>
          </div>
        </div>

        <div className="two-card">
          <div className="card">
            <img src="https://flagcdn.com/hk.svg" alt="Hong Kong Flag" />
            <h3>Hong Kong</h3>
            <p>Branch office</p>
            <div className="card-details">
              <p>XYZ Pvt. Ltd</p>
              <p>
                Road to nowhere, 06-404, 500 Internal <br /> Error
              </p>
            </div>
          </div>
          <div className="card">
            <img src="https://flagcdn.com/us.svg" alt="USA Flag" />
            <h3>USA</h3>
            <p>Head office</p>
            <div className="card-details">
              <p>XYZ Pvt. Ltd</p>
              <p>
                Road to nowhere, 06-404, 500 Internal <br /> Error
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
