import React from 'react'
import { BiSolidUserCircle } from "react-icons/bi";
import logo from '../assets/images/logo.png';

const adminNavbar = ({ onClick }) => {
  return (
    <div>
        <div className="navbar bg-base-100 border border-b">
          <div className="navbar-start">
            <div className="dropdown">
              
              <div className="drawer overflow-y-auto z-40">
                  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                    <label htmlFor="my-drawer" tabIndex={0} className="btn btn-ghost btn-circle drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                  </div> 
                  <div className="drawer-side ">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                      {/* Sidebar content here */}
                      
                      <li><a onClick={() => onClick("Appointment")}>Appointment</a></li>
                      <li><a onClick={() => onClick("Inventories")}>Inventories</a></li>
                      <li><a onClick={() => onClick("PatientRecords")}>Patient Records</a></li>
                      <li><a onClick={() => onClick("AdminBlog")}>Admin Blog</a></li>
                      <li><a onClick={() => onClick("DataAnalysis")}>Data Analysis</a></li>

                    </ul>
                  </div>
                </div>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl font-bold h-auto" href='/'>
              <img src={logo} className="flex self-center w-auto h-16" />
            </a>
          </div>
          <div className="navbar-end space-x-5 mr-3">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <button className="btn btn-ghost btn-circle h-7 w-7">
                <BiSolidUserCircle className="h-10 w-10"/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default adminNavbar