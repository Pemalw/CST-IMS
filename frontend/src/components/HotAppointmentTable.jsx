import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function HotAppointmentTable() {
  const [appointments, setAppointments]=useState([]);

  useEffect( () => {
    async function fetchdata(){
        await axios.get('http://127.0.0.1:5001/appointment')
    .then((response) => {
        setAppointments(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
    }
    fetchdata();
    }, [appointments]
);


  async function handleStateChange(rowIndex){
    console.log(rowIndex);
    const index=appointments.findIndex(item => item.someProperty == rowIndex);
    console.log(appointments[rowIndex]);
    const idCode=appointments[rowIndex]._id;
    console.log(idCode);
    //const index=appointments.findIndex(rowIndex);
    //const _id=a
    if(appointments[rowIndex].state=="no"){
      const res = await axios.put(`http://localhost:5001/appointment/adds/${idCode}`, {
        state: "yes",
        clientName: appointments[rowIndex].clientName,
        appointTime: appointments[rowIndex].appointTime,
        appointDate: appointments[rowIndex].appointDate,
        dateOfBirth: appointments[rowIndex].dateOfBirth,
        gender: appointments[rowIndex].gender,
        colId: appointments[rowIndex].colId,
        contactNo: appointments[rowIndex].contactNo,
        email: appointments[rowIndex].email,
        applicationNo: appointments[rowIndex].applicationNo,
      }).then(()=>{
        const ap=appointments;
        ap[rowIndex].state="yes";
        setAppointments(ap);
      }).catch((error)=>{
        console.log("error");
      })

    }else if(appointments[rowIndex].state=="yes"){
      const res = await axios.put(`http://localhost:5001/appointment/adds/${idCode}`, {
        state: "no",
        clientName: appointments[rowIndex].clientName,
        appointTime: appointments[rowIndex].appointTime,
        appointDate: appointments[rowIndex].appointDate,
        dateOfBirth: appointments[rowIndex].dateOfBirth,
        gender: appointments[rowIndex].gender,
        colId: appointments[rowIndex].colId,
        contactNo: appointments[rowIndex].contactNo,
        email: appointments[rowIndex].email,
        applicationNo: appointments[rowIndex].applicationNo,
      }).then(()=>{
        const ap=appointments;
        ap[rowIndex].state="yes";
        setAppointments(ap);
      }).catch((error)=>{
        console.log("error");
      })

    }

    
    
    

  };

  return (
    <div className="h-auto">
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
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleStateChange(rowIndex)} >
                      Came
                    </button>
                  ) : (
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleStateChange(rowIndex)}>
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
