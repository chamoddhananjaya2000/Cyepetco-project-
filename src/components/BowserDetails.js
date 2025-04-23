import React from "react";
import { Link } from "react-router-dom";
import "./BowserDetails.css";

const BowserDetails = () => {
  return (
    <div className="bowser-page">
      <nav className="navbar">
        <div className="logo">
          <img src="/Ceypetcologo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Income & Expenses</a></li>
          <li><Link to="/petrol95">Daily Details</Link></li>
          <li><a href="#">Payment</a></li>
          <li><Link to="/bowserdetails">Bowser Details</Link></li>
          <li><a href="#">Summary</a></li>
        </ul>
        <button className="logout-btn">Logout</button>
      </nav>

      <div className="bowser-header">
        <h1>Sri Lanka Ceypetco Fuel Station</h1>
        <h2>Bowser Records</h2>
      </div>

      <div className="bowser-grid">
        {[
          { name: "Lanka Petrol 92 Octane", warning: true },
          { name: "Lanka Petrol 95 Octane", warning: false },
          { name: "Lanka Auto Diesel", warning: false },
          { name: "Lanka Super Diesel", warning: true },
        ].map((fuel, idx) => (
          <div className="bowser-card" key={idx}>
            <div className="graph-placeholder">
              <div className="graph-line"></div>
              {fuel.warning && <div className="warning">WARNING</div>}
            </div>
            <h3>{fuel.name}</h3>
            <button className="order-btn">ORDER NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BowserDetails;
