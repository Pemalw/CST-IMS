import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function HotAppointmentTable() {
  const [appointments, setAppointments]=useState([]);

  useEffect( () => {
    async function fetchdata(){
        await axios.get('http://127.0.0.1:5000/appointment')
    .then((response) => {
        setAppointments(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
    }
    fetchdata();
    }, []
);


  const handleStateChange = async(rowIndex) => {
    const index=appointments.findIndex(rowIndex);
    

  };

  return (
    <div className="h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-center mb-16">Appointment Status</h2>
      <div className="flex justify-center">
        <table className="table-auto table-zebra bg-white rounded-lg w-4/5">
          <thead className="thead-light text-left border-b-2">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Time</th>
              <th className="p-4">State</th>
            </tr>
          </thead>
          <tbody className="tbody-light">
            {appointments.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="font-light border-b p-4">{row.clientName}</td>
                <td className="font-light border-b p-4">{row.appointTime}</td>
                <td className="font-light border-b p-4">
                  {row.state === 'yes' ? (
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleStateChange(rowIndex)} >
                      Came
                    </button>
                  ) : (
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleStateChange(rowIndex)}>
                      Did Not Come
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HotAppointmentTable;
