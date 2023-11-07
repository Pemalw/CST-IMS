import {React, useState, useEffect } from 'react'
import axios from 'axios';
import {ImSearch} from 'react-icons/im'

const TrackAppointment = () => {

  const [appointments, setAppoitnments] = useState([]);
  const [applicationNo, setApplicationNo]= useState("");
  const [clientName, setClientName] = useState("");
  const [appointTime, setAppointTime] = useState("");
  const [appointDate, setAppointDate] = useState(new Date());
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState("");
  const [colId, setColId] = useState("");
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
      //const _colId= object.colId;
      const _contactNo= object.contactNo;
      const _email= object.email;
      const _state= object.state;
      const _applicationNo= object.applicationNo;
      console.log(object.colId);
      console.log(colId);
      


      if(object.colId==colId){
        setClientName(_clientName);
        setAppointDate(_appointDate);
        setAppointTime(_appointTime);
        setApplicationNo(_applicationNo);
        //setColId(_colId);
        setEmail(_email);
        setContactNo(_contactNo);
        console.log("success");
        
      } 
    });

  }

  return (
    <div className="flex justify-center bg-[#bcdbe6] h-auto w-full">
      <div className="flex flex-col bg-white pb-32 m-20 h-auto w-4/6 rounded-xl">
        <div className="text-center mt-16 text-2xl text-[#003046] font-bold">Track Appointment</div>
        <div className="grid justify-items-center mt-16">
          <div className="input-group flex justify-center">
            <input type="text" placeholder="Enter Application Number" className="input input-bordered w-72" onChange={(e) => setColId(e.target.value)} />
            <button className="btn btn-square" onClick={search}>
              <div className="flex self-center">
                <ImSearch className="w-5 h-5"/>
              </div>
            </button>
          </div>
          <div className="mt-14 p-12 text-gray-300 leading-10 rounded-2xl bg-[#003046]">
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
  )
}

export default TrackAppointment