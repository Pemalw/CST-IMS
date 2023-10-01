
import './App.css'
import "./index.css"
import React from 'react'
import HomePage from "./pages/HomePage"
import DashBoard from "./pages/DashBoard"
import HealthAwareness from "./pages/HealthAwareness"
import Appointment from "./pages/Appointment"
import MedicalReport from "./pages/MedicalReport"
import About from "./pages/About"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/health-awareness" element={<HealthAwareness />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/medical-report" element={<MedicalReport />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
