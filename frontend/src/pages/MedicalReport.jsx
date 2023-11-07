import {React, useState, useEffect} from 'react'
import axios from 'axios';

export const MedicalReport = () => {

  const [reports, setReports] = useState([]);
  const [reportNo, setReportNo]= useState("");
  const [clientName, setClientName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date());
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [colId, setColId] = useState(0);
  const [contactNo, setContactNo] = useState(0);
  const [email, setEmail] = useState("");
  const [medicinePrescribed, setMedicinePrescribed] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  useEffect( () => {
      async function fetchdata(){
          await axios.get('http://127.0.0.1:5001/report/')
      .then((response) => {
          setReports(response.data);
      })
      .catch((error) => {
          console.log(error);
      });
      }
      fetchdata();
      }, [reports]
  );

  const search=(e)=>{
    e.preventDefault();
    reports.forEach((object) => {
      // Get the appointmentHour and slot
      const _clientName= object.clientName;
      const _time= object.time;
      const _date= object.date;
      const _age= object.age;
      const _gender= object.gender;
      const _colId= object.colId;
      const _contactNo= object.contactNo;
      const _email= object.email;
      const _medicinePrescribed= object.medicinePrescribed;
      const _diagnosis= object.diagnosis;
      const _reportNo= object.reportNo;

      if(_reportNo==reportNo){
        setClientName(_clientName);
        setDate(_date);
        setTime(_time);
        setColId(_colId);
        setEmail(_email);
        setContactNo(_contactNo);
        setGender(_gender);
        setAge(_age);
        setMedicinePrescribed(_medicinePrescribed);
        setDiagnosis(_diagnosis);
        console.log("success");
      } 
    });

  }


  return (
    <div class="h-screen">

      <div class="container mx-auto">
        <div class="bg-[#003046] w-70 h-20 mt-4 flex items-center justify-center shadow-lg rounded-lg">
          <div><h1 className="text-3xl font-bold text-center text-white ">View Medical Report</h1> </div>
        </div>
    
        <div className="hero-content text-center mt-6">
          <div className="max-w-md">
            <input type="text" placeholder="Enter Code Number " className="input input-bordered w-full max-w-xs" onChange={(e) => setReportNo(e.target.value)}/>
            <p className="py-6 text-[#dc2626] "> NOTE: The medical code number will be provided through the email. From that email enter the code to generate your medical report and veiw it. facere quidem velit fuga?</p>
            <button className="btn btn-accent bg-[#003046] text-base-100 border-0" onClick={search}>Submit</button>
              
          </div>
        </div> 
      </div>
      <div>
        <h1>Client Name: {clientName}</h1>
        <h1>Age: {age}</h1>
        <h1>Gender: {gender}</h1>
        <h1>Medicine Prescribed:{medicinePrescribed} </h1>
        <h1>Diagonisis: {diagnosis}</h1>
        <h1>Date: {date.toString()}</h1>
        <h1>ReportNo: {reportNo}</h1>

        
        
      </div>
    </div>

  )
}

export default MedicalReport