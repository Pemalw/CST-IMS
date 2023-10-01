import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppointmentForm from '../components/AppointmentForm';
import TrackAppointment from '../components/TrackAppointment';

const Appointment = () => {
  const [activeTab, setActiveTab] = useState('appointmentForm'); // Set the default tab to 'appointmentForm'

  // Define the content for each tab
  const tabContent = {
    appointmentForm: (
      <div>
        <AppointmentForm />
      </div>
    ),
    trackAppointment: (
      <div>
        <TrackAppointment />
      </div>
    ),
  };

  return (
    <div>
      <div className="tabs flex justify-center w-full mt-16 size-xl">
        <a 
          className={`tab tab-lg  font-bold ${activeTab === 'appointmentForm' ? 'tab-active bg-indigo-100 border-t border-top-black' : 'tab-lifted'} w-1/2`}
          onClick={() => setActiveTab('appointmentForm')}
        >
          Appointment Form
        </a>
        <a
          className={`tab tab-lg font-bold ${activeTab === 'trackAppointment' ? 'tab-active bg-indigo-100 border-t border-top-black' : 'tab-lifted'} w-1/2`}
          onClick={() => setActiveTab('trackAppointment')}
        >
          Track Appointment
        </a>
      </div>

      {/* Display content based on active tab */}
      <div className="content">
        {tabContent[activeTab]}
      </div>
    </div>
  );
}

export default Appointment;
