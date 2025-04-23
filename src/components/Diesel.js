import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Diesel.css"; // Make sure to create a Diesel.css or reuse Petrol95.css with class adjustments

const Diesel = () => {
  const [todayReading, setTodayReading] = useState("");
  const lastReading = 1500; // Example value for last reading
  const sale = todayReading ? todayReading - lastReading : 0;

  return (
    <div className="diesel-container">
      <nav className="navbar">
        <div className="logo">
          <img src="/Ceypetcologo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Income & Expenses</a></li>
          <li><Link to="/diesel">Daily Details</Link></li>
          <li><a href="#">Payment</a></li>
          <li><a href="#">Bowser Details</a></li>
          <li><a href="#">Summary</a></li>
        </ul>
        <button className="logout-btn">Logout</button>
      </nav>

      <div className="details-card">
        <h1 className="title">Lanka Auto Diesel</h1>

        <div className="pump-section">
          <h2>Pump 1</h2>
          <p>Day: --/--/----</p>

          <label>Last Reading</label>
          <input type="text" value={`${lastReading} ℓ`} readOnly />

          <label>Today Reading</label>
          <input 
            type="number" 
            value={todayReading} 
            onChange={(e) => setTodayReading(Number(e.target.value))}
          />

          <label>Sale</label>
          <input type="text" value={`${sale} ℓ`} readOnly />
        </div>

        <h2 className="total">Total: {sale} ℓ</h2>

        {/* Octane 92 Petrol Button */}
                <Link to="/Petrol92">
                  <button className="octane92-btn">Octane 92 Petrol</button><br/><br/>
                </Link>
        
                {/* Petrol 95 Button */}
                <Link to="/Petrol95">
                  <button className="petrol95-btn">Petrol 95</button>
                </Link><br/><br/><br/>
        
                {/* Super Diesel Button */}
                <Link to="/superdiesel">
                  <button className="SuperDiesel-btn">Super Diesel</button>
                </Link>
      </div>
    </div>
  );
};

export default Diesel;
