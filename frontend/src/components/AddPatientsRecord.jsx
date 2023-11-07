import React, { useState,useEffect } from 'react';
import axios from 'axios';

const AddPatientRecord=(props)=>{
    const { data } = props;
    const [appointments, setAppointments]=useState([]);
    const [filteredList, setFilterList]=useState([]);
    const [medPrescribed, setMedPrescribed]=useState(" ");
    const [diag, setDiag]=useState(" ");
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    useEffect( () => {
        async function fetchdata(){
            await axios.get('http://127.0.0.1:5001/appointment')
        .then((response) => {
            setAppointments(response.data);
            let ind=0;
            let index=-1;
            appointments.filter((appointment) => {
                

                if(appointment._id === data){
                    index=ind;
                }
                ind=ind+1;
            });
                
            const filterList=appointments[index];
            console.log(index);

            setFilterList(filterList);

        })
        .catch((error) => {
            console.log(error);
        });
    }
        fetchdata();
     }, [data]
    );
    function calculatesAge(dateOfBirth) {
        const birthDate = new Date(dateOfBirth);
        const currentDate = new Date();
      
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDiff = currentDate.getMonth() - birthDate.getMonth();
      
        if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
          age--;
        }
      
        return age;
      }

      const sendEmail = async () => {
        try {
          const response = await fetch('http://localhost:5001/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ recipient, subject, message }),
          });
    
          if (response.ok) {
            console.log('Email sent successfully');
          } else {
            console.error('Error sending email');
          }
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };


      const update=async()=>{
        const ids=filteredList._id;

        const res = await axios.put(`http://localhost:5001/appointment/adds/${ids}`, {
        state: "generated",
        clientName: filteredList.clientName,
        appointTime: filteredList.appointTime,
        appointDate: filteredList.appointDate,
        dateOfBirth: filteredList.dateOfBirth,
        gender: filteredList.gender,
        colId: filteredList.colId,
        contactNo: filteredList.contactNo,
        email: filteredList.email,
        applicationNo: filteredList.applicationNo,
      }).then(()=>{
        console.log("Succesfully removed");
      }).catch((error)=>{
        console.log(error);
      })

      }

      function generateReportNumber() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const currentDate = new Date();
        
        const year = currentDate.getFullYear().toString().slice(-2); // Get last 2 digits of the year
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month (0-11) to (01-12)
        const day = currentDate.getDate().toString().padStart(2, '0'); // Day (1-31) to (01-31)
        const hours = currentDate.getHours().toString().padStart(2, '0'); // Hours (0-23) to (00-23)
        const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Minutes (0-59) to (00-59)
      
        let reportNumber = '';
      
        for (let i = 0; i < 4; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          reportNumber += characters[randomIndex];
        }
      
        // Concatenate date, time, and random characters to form the report number
        reportNumber = `${year}${month}${day}${hours}${minutes}${reportNumber}`;
      
        return reportNumber;
      }

    const add=async(e)=>{
        e.preventDefault();
        const reportNum=generateReportNumber();
        const formData=new FormData();
        formData.append('reportNo', reportNum);
        formData.append('clientName', filteredList.clientName);
        formData.append('time', filteredList.appointTime);
        formData.append('date', filteredList.appointDate);
        formData.append('age', calculatesAge(filteredList.dateOfBirth));
        formData.append('gender', filteredList.gender);
        formData.append('colId', parseInt(filteredList.colId));
        formData.append('contactNo', parseInt(filteredList.contactNo));
        formData.append('email', filteredList.email);
        formData.append("medicinePrescribed", medPrescribed);
        formData.append("diagnosis", diag);

        const requestHeaders = {
            'Content-Type': 'application/json',
        };
        const response = await axios.post('http://127.0.0.1:5001/report/add/', formData, {
                headers: requestHeaders,
        }).then(()=>{
            console.log("Succesfully added in report");
            setRecipient(filteredList.email);
            setSubject("Your Report Number");
            setMessage(reportNum);

            sendEmail();
            update();
        }).catch((error)=>{
            console.log(error);
        });

    }

  return (

    <div className="flex flex-col justify-center space-y-8">
        <h1 className="text-xl pl-10 pb-4 font-bold text-center">Add Patient Records</h1>
            <form className="">
                <div className="space-y-4">
                    <div className="flex justify-center flex-col md:flex-row md:space-x-6">
                        <input type="number"  className="input input-bordered w-1/4 max-w-xs" value={ (filteredList)?filteredList.colId:"000000"} />
                        <input type="name"  className="input input-bordered w-1/4 max-w-xs" value={(filteredList)?filteredList.clientName:"xxxxxx"}/>
                        <input type="text"  className="input input-bordered w-1/4 max-w-xs" value={(filteredList)?(filteredList.appointDate+filteredList.appointTime):"dd/mm/yyyy"}/>
                    </div>
                    <div className="flex flex-wrap justify-center space-y-4">
                        <textarea className="textarea textarea-bordered h-40 w-4/5" placeholder="Diagnosis" onChange={(e) => setMedPrescribed(e.target.value)}></textarea>
                        <input type="text" placeholder="Medicine Prescribed" className="input input-bordered h-20  w-4/5" onChange={(e) => setDiag(e.target.value)}/>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn bg-[#bcdbe6] hover:bg-gradient-to-r from-[#2f5d6e] to-[#5c8a9c] hover:text-white w-32 mt-8 mb-12" type="submit" onClick={add}>Generate Report</button>
                    </div>
                </div>
            </form>
    </div>
    
  );
}

export default AddPatientRecord;