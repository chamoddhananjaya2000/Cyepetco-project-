import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Petrol95.css";

const Petrol95 = () => {
  const [todayReading, setTodayReading] = useState("");
  const lastReading = 2000; // Example value
  const sale = todayReading ? todayReading - lastReading : 0;

  return (
    <div className="petrol95-container">
      <nav className="navbar">
        <div className="logo">
          <img src="/Ceypetcologo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Income & Expenses</a></li>
          <li><Link to="/petrol95">Daily Details</Link></li>
          <li><a href="#">Payment</a></li>
          <li><a href="#">Bowser Details</a></li>
          <li><a href="#">Summary</a></li>
        </ul>
        <button className="logout-btn">Logout</button>
      </nav>

      <div className="details-card">
        <h1 className="title">Lanka Petrol 95 Octane</h1>

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

        {/* Super Diesel Button */}
        <Link to="/SuperDiesel">
        <button className="SuperDiesel-btn">Super Diesel</button>
        </Link>

      </div>
    </div>
  );
};

export default Petrol95;
