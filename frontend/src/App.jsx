
import "./index.css"
import React from 'react'
import HomePage from "./pages/HomePage"
import DashBoard from "./pages/DashBoard"
import HealthAwareness from "./pages/HealthAwareness"
import Appointment from "./pages/Appointment"
import MedicalReport from "./pages/MedicalReport"
import About from "./pages/About"
import NavbarLayout from "./components/NavbarLayout"
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import SinglePost from "./components/Single"
import Write from "./pages/AdminPost"
import AdminBlog from "./components/AdminBlog"
import LoginForm from "./components/LoginForm"



const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLayout><HomePage /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>
  
  },
  {
    path: "/about",
    element: <NavbarLayout><About /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>
  },
  {
    path: "/appointment",
    element: <NavbarLayout><Appointment /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>

  },
  {
    path: "/health-awareness",
    element: <NavbarLayout><HealthAwareness /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>,
  
  },
  {
    path: "/medical-report",
    element: <NavbarLayout><MedicalReport /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>

  },
  {
    path: "/admin",
    element: <DashBoard />,
    errorElement:<h1 className="flex">Opps</h1>
  },
  
  {
    path: "/adminBlog",
    element: <AdminBlog/>,
    errorElement:<h1 className="flex">Opps</h1>
  },
  {
    path: "/SinglePost-page",
    element: <NavbarLayout><SinglePost /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>,
  
  },
  {
    path: "/login",
    element: <NavbarLayout><LoginForm /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>,
  
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App
