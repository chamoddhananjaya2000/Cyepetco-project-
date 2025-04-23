import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost/fetchData.php")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: false,
    centerPadding: "20px",
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">
          <img src="/Ceypetcologo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Income & Expenses</a></li>
          <li><Link to="/petrol95">Daily Details</Link></li>
          <li><a href="#">Payment</a></li>
          <li><Link to="/BowserDetails">Bowser Details</Link></li>
          <li><a href="#">Summary</a></li>
        </ul>
        <button className="logout-btn">Logout</button>
      </nav>

      <div className="content">
        {data ? (
          <h2>Fuel Station ID: {data.station_id} | {data.location}</h2>
        ) : (
          <p></p>
        )}

        <div className="carousel-container">
          <Slider {...sliderSettings}>
            <div><img src="/station.jpg" alt="Fuel Station" /></div>
            <div><img src="/tanker.jpg" alt="Fuel Tanker" /></div>
            <div><img src="/fueling.jpg" alt="Fueling Car" /></div>
          </Slider>
        </div>

        <div className="buttons">
         
            <button className="btn">Daily Records</button><br/>
            <button className="btn">Payment</button><br/>
            <button className="btn">Bowser Details</button><br/>
            <button className="btn">Income & Expenses</button><br/>
            <button className="btn">Summary Records</button><br/>
        
        </div>
      </div>
    </div>
  );
};

export default HomePage;
