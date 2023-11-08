import {React,useState, useEffect} from 'react';
import AddPatientRecord from './AddPatientsRecord';
import axios from 'axios';
import PatientRec from './PatientRec';

function Table() {
  const [appointments, setAppointments]=useState([]);
  const [dummyapp, setdummyapp]=useState([]);
  const [filteredList, setFilterList]=useState([]);
  const [selectedId, setSelectedId] = useState();

  useEffect( () => {
    async function fetchdata(){
        await axios.get('http://127.0.0.1:5001/appointment')
    .then((response) => {
        setAppointments(response.data);
        setdummyapp(response.data);
        const filterList = appointments.filter(appointment => appointment.state === 'yes');
        filterList.reverse();
        setFilterList(filterList);

    })
    .catch((error) => {
        console.log(error);
    });
    }
    fetchdata();
     // Interval in milliseconds (1000ms = 1 second)
    }, [dummyapp]
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
const openModal = (id) => {
  const modal = document.getElementById('my_modal');
  modal.showModal();
};

  return (
    <div className="flex flex-col justify-center my-16">
      <div className="flex flex-1 justify-center">
        <table className="table-auto w-5/6">
            <caption className='text-left md:text-2xl text-xl indent-4 font-bold drop-shadow-4 mb-10'>Patient List</caption>
            <thead className='thead-light border-b-2'>
                <tr>
                  <th>StdID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>ContactNo</th>
                  <th>Email</th>
                  <th>Time</th>
                <th>
                  
                </th>
                </tr>
            </thead>
            <tbody className='tbody-light'>
            
                {filteredList.map(app => (
                <tr key={app._id}>
                    <td className="font-light text-left border-b p-4 " >{app.colId}</td>
                    <td className="font-light text-left border-b p-4 " >{app.clientName}</td>
                    <td className="font-light text-left border-b p-4 " >{app.gender}</td>
                    <td className="font-light text-left border-b p-4 " >{calculateAge(app.dateOfBirth)}</td>
                    <td className="font-light text-left border-b p-4 " >{app.contactNo}</td>
                    <td className="font-light text-left border-b p-4 " >{app.email}</td>
                    <td className="font-light text-left border-b p-4 " >{app.appointTime}</td>
                    
                    <td>
                        <button className="btn btn-sm normal-case bg-[#003046] text-base-100 btn-accent border-0" onClick={()=>{openModal(app._id)
                        setSelectedId(app._id)}}>
                            Generate Report
                        </button>
                        <dialog id="my_modal" className="modal">
                          <div className="modal-box w-11/12 max-w-5xl bg-slate-50">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <AddPatientRecord data={selectedId}/>
                            <div className="modal-action">
                            </div>
                          </div>
                        </dialog>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
      <div className="">
        <PatientRec/>
      </div>
    </div>
  );
}

export default Table;
