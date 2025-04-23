import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import Petrol95 from "./components/Petrol95";
import Petrol92 from "./components/Petrol92";
import SuperDiesel from './components/SuperDiesel';
import Diesel from './components/Diesel';
import BowserDetails from './components/BowserDetails'; 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/petrol95" element={<Petrol95 />} />
        <Route path="/petrol92" element={<Petrol92 />} />
        <Route path="/SuperDiesel" element={<SuperDiesel />} />
        <Route path="/Diesel" element={<Diesel />} />
        <Route path="/BowserDetails" element={<BowserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
