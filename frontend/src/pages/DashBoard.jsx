import React from 'react';
import Table from '../components/Table';
import AddPatientRecord from '../components/AddPatientsRecord';
import HotAppointmentTable from '../components/HotAppointmentTable';

const DashBoard = () => {

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
    
   <>
    <Table headers={headers} data={data} captions={"Patient List"}/>
    <AddPatientRecord/>
    <HotAppointmentTable data={data1}/>
    </>
    
  )
}

export default DashBoard