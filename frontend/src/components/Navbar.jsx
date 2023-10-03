import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100 font-bold pt-3  border border-b">
                <div className="flex-1">
                  <a className="btn btn-ghost normal-case text-xl">CST Infirmary</a>
                </div>
                <div className="flex-none">
                  <ul className="menu menu-horizontal px-1 text-base">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/health-awareness">Health Awareness</Link></li>
                    <li><Link to="/appointment">Appointment</Link></li>
                    <li><Link to="/medical-report">Medical Report</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                  </ul>
                </div>
            </div>
        </div>
    );
  }

  export default Navbar;