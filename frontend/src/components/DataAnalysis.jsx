import React from 'react';
import GradientLineGraph from './GradientLineGraph';
import { useState, useEffect} from 'react';
import axios from 'axios';
import InventoryData from './InventoryData';

const DataAnalysis = () => {
  const [report, setReport]=useState([]);
  const [studentCount, setStudentCounts]=useState(0);
  const [most, setMost]=useState("");
  const [diseaseCount, setDiseaseCount]=useState(0);



  useEffect( () => {
    async function fetchdata(){
        await axios.get('http://127.0.0.1:5001/report')
    .then((response) => {
        setReport(response.data);
        setStudentCounts(report.length);
        const diagnosisCounts={};
        report.forEach(reports => {
          const diagnosis = reports.diagnosis;
          // If the diagnosis is already a key in the object, increment the count
          if (diagnosisCounts.hasOwnProperty(diagnosis)) {
            diagnosisCounts[diagnosis]++;
          } else {
            // If the diagnosis is not a key, initialize the count to 1
            diagnosisCounts[diagnosis] = 1;
          }
        });
        const labels=Object.keys(diagnosisCounts);
        const numbers=Object.values(diagnosisCounts);
        const index=indexOfMax(numbers);
        setMost(labels[index]);
        setDiseaseCount(numbers[index]);

        
    })
    .catch((error) => {
        console.log(error);
    });
    }
    fetchdata();
    }, [report]
  );

  function indexOfMax(arr) {
    if (arr.length === 0) {
      return -1; // Returns -1 for an empty array
    }
  
    let max = arr[0];
    let maxIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
      }
    }
  
    return maxIndex;
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className=" md:space-x-10 space-y-4 mt-8">
          <div className="stats shadow stats-vertical lg:stats-horizontal w-64 h-40">
            <div className="stat place-items-center w-100 h-100">
              <div className="stat-title">Diseases (most prominent)</div>
              <div className="stat-value text-[#60AAC5]">{diseaseCount}</div>
              <div className="stat-desc">{most}</div>
            </div>
          </div>
          <div className="stats shadow stats-vertical lg:stats-horizontal w-64 h-40">
            <div className="stat place-items-center">
              <div className="stat-title">Total Consultations</div>
              <div className="stat-value text-[#61AAC5]">{studentCount}</div>
              <div className="stat-desc">Total number of students visted in a month</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-center mt-16">
          <div className="text-center text-2xl font-extrabold text-[003046]">Diagnosis Results</div>
          <GradientLineGraph />
        </div>
        <div className="flex flex-col self-center mt-16">
        <div className="text-center text-2xl font-extrabold text-[003046]">Inventory</div>
            <InventoryData/>
        </div>
      </div>
    </div>
  )
}

export default DataAnalysis