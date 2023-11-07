import {React,useState, useEffect} from 'react';
import axios from 'axios';

function PatientRec() {
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
    }, []
);
function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

const handleSearch = () => {
    const searchTerm = document.getElementById('search').value.toLowerCase();
  
    const filteredAppointments = appointments.filter(app => {
      return (
        app.clientName.toLowerCase().includes(searchTerm) ||
        app.email.toLowerCase().includes(searchTerm) ||
        String(app.colId).toLowerCase().includes(searchTerm)
      );
    });
  
    // Update the appointments list with the filtered results
    setAppointments(filteredAppointments);
  };

  return (
    <div className="flex flex-col justify-center my-16">
      <div className="flex justify-center mt-20">
        <div className="felx search-bar justify-center">
            <input type="text" placeholder="Search by name, email, or contact number" id="search" />
            <button onClick={() => handleSearch()}>Search</button>
        </div>
        <table className="table-auto w-5/6">
            <caption className='text-left text-xl md:text-2xl indent-4 font-bold drop-shadow-4 mb-10'>Patient Records</caption>
            <thead className='thead-light border-b-2'>
                <tr>
                  <th>StdID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>ContactNo</th>
                  <th>Email</th>
                  <th>Time</th>
                </tr>
            </thead>
            <tbody className='tbody-light'>
            
                {appointments.map(app => (
                <tr key={app._id}>
                    <td className="font-light text-left border-b p-4 " >{app.colId}</td>
                    <td className="font-light text-left border-b p-4 " >{app.clientName}</td>
                    <td className="font-light text-left border-b p-4 " >{app.gender}</td>
                    <td className="font-light text-left border-b p-4 " >{calculateAge(app.dateOfBirth)}</td>
                    <td className="font-light text-left border-b p-4 " >{app.contactNo}</td>
                    <td className="font-light text-left border-b p-4 " >{app.email}</td>
                    <td className="font-light text-left border-b p-4 " >{app.appointTime}</td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientRec;
