import React from 'react';
import home from '../assets/homepage.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={home} className="w-full lg:w-88 h-80 rounded-lg shadow-2xl mx-10" alt="Homepage" />
          <div className="lg:w-1/2 ml-4">
            <h1 className="text-5xl lg:text-6xl font-bold">CST Infirmary Management System</h1>
            <p className="py-7 mt-4 lg:mt-7">
            CST Infirmary Management System encompasses the development of a comprehensive digital platform designed 
            to efficiently manage healthcare services and patient information within a college. It provide a user-friendly 
              interface and a range of features to enhance healthcare delivery, patient engagement, and medical supply
              management. 

            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
