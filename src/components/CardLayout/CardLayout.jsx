import React from 'react';
import "./CardLayout.css"

export const CardLayout = () => {
  return (
    <div className='card-layout'>
        <h2>Layout Cards</h2>
        <div className="cards">
          <div className="card">
          <img src="https://flagcdn.com/us.svg" alt="USA Flag" />
          <h3>USA</h3>
          <p>Head office</p>
          <div className="address">
          <p>XYZ Pvt.Ltd</p>
          <p>Road to nowwher, 06-404, 500 Internal <br/> Error</p>
          </div>
          </div>

          <div className="card">
          <img src="https://flagcdn.com/us.svg" alt="USA Flag" />
          <h3>USA</h3>
          <p>Head office</p>
          <div className="address">
          <p>XYZ Pvt.Ltd</p>
          <p>Road to nowwher, 06-404, 500 Internal <br/> Error</p>
          </div>
          </div>

          <div className="card">
          <img src="https://flagcdn.com/us.svg" alt="USA Flag" />
          <h3>USA</h3>
          <p>Head office</p>
          <div className="address">
          <p>XYZ Pvt.Ltd</p>
          <p>Road to nowwher, 06-404, 500 Internal <br/> Error</p>
          </div>
          </div>

          </div>

        </div>
  )
}
