import {React, useState, useEffect } from 'react'
import axios from 'axios';

const TrackAppointment = () => {

  const [appointments, setAppoitnments] = useState([]);
  const [applicationNo, setApplicationNo]= useState("");
  const [clientName, setClientName] = useState("");
  const [appointTime, setAppointTime] = useState("");
  const [appointDate, setAppointDate] = useState(new Date());
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState("");
  const [colId, setColId] = useState(0);
  const [contactNo, setContactNo] = useState(0);
  const [email, setEmail] = useState("");

  useEffect( () => {
      async function fetchdata(){
          await axios.get('http://127.0.0.1:5001/appointment')
      .then((response) => {
          setAppoitnments(response.data);
      })
      .catch((error) => {
          console.log(error);
      });
      }
      fetchdata();
      }, [appointments]
  );

  const search=(e)=>{
    e.preventDefault();

    appointments.forEach((object) => {
      // Get the appointmentHour and slot
      const _clientName= object.clientName;
      const _appointTime= object.appointTime;
      const _appointDate= object.appointDate;
      const _dateOfBirth= object.dateOfBirth;
      const _gender= object.gender;
      const _colId= object.colId;
      const _contactNo= object.contactNo;
      const _email= object.email;
      const _state= object.state;
      const _applicationNo= object.applicationNo;

      if(_colId==colId){
        setClientName(_clientName);
        setAppointDate(_appointDate);
        setAppointTime(_appointTime);
        setColId(_colId);
        setEmail(_email);
        setContactNo(_contactNo);
        console.log("success");
        
      } 
    });

  }

  return (
    <div className="flex justify-center bg-[#bcdbe6] h-screen w-full">
        <div className="bg-white m-20 h-auto w-4/6 rounded-xl">
            <div className="text-center mt-16 text-2xl text-[#003046] font-bold">Track Appointment</div>
            <div className="flex justify-center mt-16">
              <div className="form-control">
               <div className="input-group">
                 <input type="text" placeholder="Enter Application Number" className="input input-bordered" onChange={(e) => setApplicationNo(e.target.value)} />
                 <button className="btn btn-square" onClick={search}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                 </button>
               </div>
               <div>
               <ul>
                <li>Client Name: {clientName}</li>
                <li>Appointment Date: {appointDate.toString()}</li>
                <li>Appointment Time: {appointTime}</li>
                <li>Col ID: {colId}</li>
                <li>Email: {email}</li>
                <li>Contact No: {contactNo}</li>
              </ul>
               </div>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default TrackAppointment