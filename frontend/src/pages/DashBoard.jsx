import React, { useState } from 'react';
import Table from '../components/Table';
import AddPatientRecord from '../components/AddPatientsRecord';
import HotAppointmentTable from '../components/HotAppointmentTable';
import AdminNavbar from '../components/adminNavbar';
import Footer from '../components/Footer';
import Inventory from '../components/Inventory.jsx';

const DashBoard = () => {

  const [currentComponent, setCurrentComponent] = useState("Appointment");

  const handleSideBarLinkClick = (componentName) => {
    setCurrentComponent(componentName);
  };


  const headers = ['Name','Time', 'Gender', 'Age','CID', 'Contact', 'Email']; // Example headers
  const data = [
    { Name: 'Tandin Phuntsho', Time:'01.10.2023 09:30',Gender:'Male', Age: 22, Contact:17791936, CID:'10305002222', Email: '02200166.cst@rub.edu.bt' },
    { Name: 'Pema Lhaden', Time:'01.10.2023 10:30',Gender:'Female', Age: 21, Contact:17791876, CID:'10305002223', Email: '02200179.cst@rub.edu.bt' },
    { Name: 'Sonam Dema', Time:'01.10.2023 10:45',Gender:'Female', Age: 22, Contact:17793436, CID:'10205002222', Email: '02200164.cst@rub.edu.bt' },
    { Name: 'Kinley Wangchuk', Time:'01.10.2023 11:00',Gender:'Male', Age: 23, Contact:17871936, CID:'10305052222', Email: '02200151.cst@rub.edu.bt' },
    { Name: 'Sonam Phuntsho', Time:'01.10.2023 11:10',Gender:'Male', Age: 23, Contact:17451936, CID:'10305002322', Email: '02200165.cst@rub.edu.bt' },
  ]; // Example data
  const data1=[
    { Name: 'Tandin Phuntsho', Time: '01.10.2023 09:30', State: 'yes' },
    { Name: 'Pema Lhaden', Time: '01.10.2023 10:30', State: 'no' },
    { Name: 'Sonam Dema', Time: '01.10.2023 10:45', State: 'yes' },
    { Name: 'Kinley Wangchuk', Time: '01.10.2023 11:00', State: 'no' },
    { Name: 'Sonam Phuntsho', Time: '01.10.2023 11:10', State: 'yes' },
  ];

  return (
    <div className="bg-gray-100">
      <AdminNavbar onClick={handleSideBarLinkClick} />
      
      <div className="my-10">
        {/* Conditionally render components based on selectedOption */}
        {currentComponent === 'PatientRecords' && (
          <>
            <Table headers={headers} data={data} captions={'Patient List'}/>
            <AddPatientRecord />
          </>
        )}

        {currentComponent === 'Appointment' && (
          <HotAppointmentTable data={data1} />
        )}

        {currentComponent === 'Inventories' && (
          <Inventory />
        )}
      </div>

       <Footer />
    </div>
  )
}

export default DashBoard