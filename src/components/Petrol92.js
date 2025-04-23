import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Petrol92.css";

const Petrol92 = () => {
  const [todayReading1, setTodayReading1] = useState("");
  const [todayReading2, setTodayReading2] = useState("");
  
  const lastReading1 = 1500; // Example value for Pump 1
  const lastReading2 = 1800; // Example value for Pump 2
  
  const sale1 = todayReading1 ? todayReading1 - lastReading1 : 0;
  const sale2 = todayReading2 ? todayReading2 - lastReading2 : 0;
  const totalSale = sale1 + sale2;

  return (
    <div className="petrol92-container">
      <nav className="navbar">
        <div className="logo">
          <img src="/Ceypetcologo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Income & Expenses</a></li>
          <li><Link to="/petrol92">Daily Details</Link></li>
          <li><a href="#">Payment</a></li>
          <li><a href="#">Bowser Details</a></li>
          <li><a href="#">Summary</a></li>
        </ul>
        <button className="logout-btn">Logout</button>
      </nav>

      <div className="details-card">
        <h1 className="title">Lanka Petrol 92 Octane</h1>

        {/* Pump 1 Section */}
        <div className="pump-section">
          <h2>Pump 1</h2>
          <p>Day: --/--/----</p>

          <label>Last Reading</label>
          <input type="text" value={`${lastReading1} ℓ`} readOnly />

          <label>Today Reading</label>
          <input 
            type="number" 
            value={todayReading1} 
            onChange={(e) => setTodayReading1(Number(e.target.value))}
          />

          <label>Sale</label>
          <input type="text" value={`${sale1} ℓ`} readOnly />
        </div>

        {/* Pump 2 Section */}
        <div className="pump-section">
          <h2>Pump 2</h2>
          <p>Day: --/--/----</p>

          <label>Last Reading</label>
          <input type="text" value={`${lastReading2} ℓ`} readOnly />

          <label>Today Reading</label>
          <input 
            type="number" 
            value={todayReading2} 
            onChange={(e) => setTodayReading2(Number(e.target.value))}
          />

          <label>Sale</label>
          <input type="text" value={`${sale2} ℓ`} readOnly />
        </div>

        <h2 className="total">Total: {totalSale} ℓ</h2>

        {/* Navigate to Petrol 95 */}
        <Link to="/Petrol95">
          <button className="octane95-btn">Octane 95 Petrol</button><br/><br/>
        </Link>

        {/* Navigate to Super Diesel */}
        <Link to="/SuperDiesel">
          <button className="SuperDiesel-btn">Super Diesel</button>
        </Link>
      </div>
    </div>
  );
};

export default Petrol92;
