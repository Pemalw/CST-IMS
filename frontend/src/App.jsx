
import "./index.css"
import React from 'react'
import HomePage from "./pages/HomePage"
import DashBoard from "./pages/DashBoard"
import HealthAwareness from "./pages/HealthAwareness"
import Appointment from "./pages/Appointment"
import MedicalReport from "./pages/MedicalReport"
import About from "./pages/About"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import AdminNavbar from './components/adminNavbar'
import Footer from './components/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar>
        {children} 
      </Navbar>
    </div>
  );
};

const Layout1 = ({ children }) => {
  return (
    <div>
      <AdminNavbar>
        {children} 
      </AdminNavbar>
    </div>
  );
};

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route  exact path="/" 
                element={
                <Layout>
                  <HomePage />
                </Layout>
              } />
        <Route  path="/dashboard" 
                element={
                  <Layout1>
                    <DashBoard />
                  </Layout1>
                } />
        <Route  path="/health-awareness" 
                element={
                  <Layout>
                    <HealthAwareness />
                  </Layout>
                } />
        <Route  path="/appointment" 
                element={
                  <Layout>
                    <Appointment />
                  </Layout>
                } />
        <Route  path="/medical-report" 
                element={
                  <Layout>
                    <MedicalReport />
                  </Layout>
                } />
        <Route  path="/about" 
                element={
                  <Layout>
                    <About />
                  </Layout>
                } />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
