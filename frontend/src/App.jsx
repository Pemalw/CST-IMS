
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLayout><HomePage /></NavbarLayout>
  },
  {
    path: "/about",
    element: <NavbarLayout><About /></NavbarLayout>
  },
  {
    path: "/appointment",
    element: <NavbarLayout><Appointment /></NavbarLayout>

  },
  {
    path: "/health-awareness",
    element: <NavbarLayout><HealthAwareness /></NavbarLayout>

  },
  {
    path: "/medical-report",
    element: <NavbarLayout><MedicalReport /></NavbarLayout>

  },
  {
    path: "/admin",
    element: <DashBoard />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App
