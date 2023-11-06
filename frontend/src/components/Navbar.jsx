import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-10"> 
      <div className="lg:flex lg:justify-between lg:items-center font-bold pt-3 border border-b">
        <div className="flex items-center justify-between">
          <a className="btn btn-ghost normal-case text-xl">CST Infirmary</a>

          {/* Hamburger Menu Icon */}
          <div
            className={`lg:hidden cursor-pointer ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex menu menu-horizontal px-1 text-base text-[#003046]">
          <li className="hover:bg-[#E6F4F1] active:bg-[#E6F4F1] rounded"><Link to="/">Home</Link></li>
          <li className="hover:bg-[#E6F4F1] active:bg-[#E6F4F1] rounded"><Link to="/health-awareness">Health Awareness</Link></li>
          <li className="hover:bg-[#E6F4F1] active:bg-[#E6F4F1] rounded"><Link to="/appointment">Appointment</Link></li>
          <li className="hover:bg-[#E6F4F1] active:bg-[#E6F4F1] rounded"><Link to="/medical-report">Medical Report</Link></li>
          <li className="hover:bg-[#E6F4F1] active:bg-[#E6F4F1] rounded"><Link to="/about">About Us</Link></li>
          <li className="hover:bg-[#E6F4F1] active:bg-[#E6F4F1] rounded"> <Link to="/login">Admin</Link></li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed top-0 right-0 h-full bg-base-200 z-50">
          <div className="flex justify-end items-center p-2">
            <button className="btn btn-ghost" onClick={closeMobileMenu}>
              {/* Close (x) Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="menu w-60 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/health-awareness" onClick={closeMobileMenu}>Health Awareness</Link></li>
            <li><Link to="/appointment" onClick={closeMobileMenu}>Appointment</Link></li>
            <li><Link to="/medical-report" onClick={closeMobileMenu}>Medical Report</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to="/login" onClick={closeMobileMenu}>Admin</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
