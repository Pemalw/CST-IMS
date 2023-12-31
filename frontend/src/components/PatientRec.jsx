import {React,useState, useEffect} from 'react';
import axios from 'axios';
import {ImSearch} from 'react-icons/im'

function PatientRec() {
  const [appointments, setAppointments]=useState([]);
  const [filtered, setFiltered]=useState([]);
  

  useEffect( () => {
    async function fetchdata(){
        await axios.get('http://127.0.0.1:5001/report')
    .then((response) => {
        setAppointments(response.data);
        setFiltered(response.data);
        

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
    setFiltered(filteredAppointments);
  };

  return (
    <div className="flex justify-center my-16">
      <div className="flex flex-col mt-20 w-full">
        <div className="search-bar flex self-center border rounded-lg p-2 mb-8 w-auto">
            <input type="text" className="p-2 rounded-xl w-96" placeholder="Search by name, email, or contact number" id="search" />
            <button onClick={() => handleSearch()} className="btn">
              <div className="w-4 h-4 m-2">
                <ImSearch />
              </div>
            </button>
        </div>
        <div className="flex place-content-center w-full">
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
            
                {filtered.map(app => (
                <tr key={app._id}>
                    <td className="font-light text-left border-b p-4 " >{app.colId}</td>
                    <td className="font-light text-left border-b p-4 " >{app.clientName}</td>
                    <td className="font-light text-left border-b p-4 " >{app.gender}</td>
                    <td className="font-light text-left border-b p-4 " >{app.age}</td>
                    <td className="font-light text-left border-b p-4 " >{app.contactNo}</td>
                    <td className="font-light text-left border-b p-4 " >{app.email}</td>
                    <td className="font-light text-left border-b p-4 " >{app.time}</td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatientRec;
