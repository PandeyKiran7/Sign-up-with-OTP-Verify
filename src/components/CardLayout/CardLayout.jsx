import React from 'react';
import "./CardLayout.css"
 
const CardLayout = () => {
  return (
    <div className='card-layout'>
      <div className="back-arrow">
      <i class="fa-solid fa-arrow-left"></i>
        <p>Back</p>
      </div>
        <h2>Layout Cards</h2>

        <div className="cards">
            <div className="card">
          <img src="https://flagcdn.com/us.svg" alt="USA Flag" />
          <h3>USA</h3>
          <p>Head office</p>
            </div>

          <div className="card-details">
          <p>XYZ Pvt.Ltd</p>
          <p>Road to nowwher, 06-404, 500 Internal <br/> Error</p>
          </div>
          </div>

          </div>
  )
};
export default CardLayout;
