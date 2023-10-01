import React from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Navbar-to add as a component */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">CST Infirmry</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/HealthAwareness">Health Awareness</Link></li>
            <li><Link to="/Appointment">Appointment</Link></li>
            <li><Link to="/MedicalReport">Medical Report</Link></li>
            <li><Link to="/About">About Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
    );
}

export default HomePage