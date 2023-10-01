
import './App.css'
import "./index.css"
import React from 'react'
import HomePage from "./pages/HomePage"
import DashBoard from "./pages/DashBoard"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
