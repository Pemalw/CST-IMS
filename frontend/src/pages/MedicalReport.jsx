import {React, useState, useEffect} from 'react'
import axios from 'axios';
import logo2 from '../assets/logo2.png';
import jsPDF from 'jspdf';


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

  const generatePDF = () => {
    const doc = new jsPDF();

// Set font family and size
doc.setFont('helvetica', 'bold');

// Add report title
doc.setFontSize(16);
doc.text('Infirmary Report', 80, 20);

// Add report details
doc.setFontSize(12);
doc.text('Report No:', 30, 40);
doc.text(reportNo, 70, 40);

doc.text('Client Name:', 30, 50);
doc.text(clientName, 80, 50);

doc.text('Time:', 30, 60);
doc.text(time, 50, 60);

doc.text('Date:', 30, 70);
doc.text(date.toString(), 40, 70);

// Add patient information
doc.text('Age:', 120, 40);
doc.text(age.toString(), 140, 40);

doc.text('Gender:', 140, 50);
doc.text(gender, 160, 50);

doc.text('Col ID:', 80, 60);
doc.text(colId.toString(), 100, 60);

doc.text('Contact No:', 130, 70);
doc.text(contactNo.toString(), 160, 70);

doc.text('Email:', 120, 80);
doc.text(email, 140, 80);

// Add diagnosis and medication
doc.text('Diagnosis:', 30, 120);
doc.text(diagnosis, 70, 120);

doc.text('Medication Prescribed:', 30, 130);
doc.text(medicinePrescribed, 100, 130);

// Generate the PDF document
doc.save('infirmary-report.pdf');
    
  };

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
    document.getElementById('my_modal').showModal();

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
            <dialog id="my_modal" className="modal">
              <div className="modal-box w-11/12 max-w-5xl bg-slate-50">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="flex justify-center">
                  <div className="flex flex-col">
                    <div className="flex self-center mt-5">
                      <img src={logo2} className="w-96 h-auto" /> 
                    </div>
                    <div className="flex flex-row">
                      <div className="m-4 md:m-14 text-right text-lg md:text-xl font-bold leading-10 rounded-2xl">
                        <h1>Client Name: </h1>
                        <h1>Age: </h1>
                        <h1>Gender: </h1>
                        <h1>Medicine Prescribed: </h1>
                        <h1>Diagonisis: </h1>
                        <h1>Date: </h1>
                        <h1>ReportNo: </h1>
                      </div>
                      <div className="m-4 md:m-14 text-left text-md md:text-lg leading-10 rounded-2xl">
                        <h1>{clientName}</h1>
                        <h1>{age}</h1>
                        <h1>{gender}</h1>
                        <h1>{medicinePrescribed} </h1>
                        <h1>{diagnosis}</h1>
                        <h1>{date.toString()}</h1>
                        <h1>{reportNo}</h1>
                      </div>
                    </div>
                    <div>
                    <button className="btn bg-[#003046] text-base-200 btn-accent border-0 w-32 mt-8 mb-12" type="submit" onClick={()=>{generatePDF()}}>Download</button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div> 
      </div>
    </div>

  )
}

export default MedicalReport