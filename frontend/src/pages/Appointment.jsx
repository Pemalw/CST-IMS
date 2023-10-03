import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';
import TrackAppointment from '../components/TrackAppointment';
import SlotChecker from '../components/SlotChecker';

const Appointment = () => {
  const [activeTab, setActiveTab] = useState('appointmentForm'); // Set the default tab to 'appointmentForm'

  // Define the content for each tab
  const tabContent = {
    appointmentForm: (
      <div className="bg-[#bcdbe6] flex flex-col items-center p-4 lg:p-8">
        <SlotChecker />
        <AppointmentForm />
      </div>
    ),
    trackAppointment: (
      <div className="p-4 lg:p-8">
        <TrackAppointment />
      </div>
    ),
  };

  return (
    <div>
      <div className="tabs flex justify-center w-full mt-16">
        <a
          className={`tab tab-lg font-bold ${
            activeTab === 'appointmentForm'
              ? 'tab-active bg-[#bcdbe6] border-t border-top-black'
              : 'tab-lifted'
          } w-1/2 lg:w-auto`}
          onClick={() => setActiveTab('appointmentForm')}
        >
          Appointment Form
        </a>
        <a
          className={`tab tab-lg font-bold ${
            activeTab === 'trackAppointment'
              ? 'tab-active bg-[#bcdbe6] border-t border-top-black'
              : 'tab-lifted'
          } w-1/2 lg:w-auto`}
          onClick={() => setActiveTab('trackAppointment')}
        >
          Track Appointment
        </a>
      </div>

      {/* Display content based on active tab */}
      <div className="content">{tabContent[activeTab]}</div>
    </div>
  );
};

export default Appointment;
