import { Line } from "react-chartjs-2";
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //xasxi
  LinearScale, //yaxis
  PointElement,
  Legend,
  Tooltip
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);





const GradientLineGraph = () => {

  const [report, setReport]=useState([]);
  const [studentCount, setStudentCounts]=useState(0);
  const [lab, setLab]=useState([]);
  const [counts, setCounts]=useState([]);

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
        setLab(labels);
        setCounts(numbers);
    })
    .catch((error) => {
        console.log(error);
    });
    }
    fetchdata();
    }, [report]
  );



  const data = {
    labels: lab,
    datasets: [{
        label: '',
        data: counts,
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: '#61BDD5',
        fill: true,
        tension: 0.4
    }]
  }  

  const options = {
    plugins: {
        legend: false
    },
    scales: {
        y: {
            // min: 3,
            // max: 6
        }
    }
  }

  return <div className="w-[500px] h-[300px] p-5">
    <Line
    data={data}
    options={options}
    ></Line>
  </div>;
};

export default GradientLineGraph;