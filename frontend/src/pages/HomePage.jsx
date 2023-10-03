import React from 'react'
import home from "../assets/homepage.jpg"
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={home} className="w-88 h-80 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold ">CST Infirmary Management System </h1>
      <p className="py-6 mt-7">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa dolore eligendi earum voluptate beatae, aspernatur, inventore, natus magni quos iusto facilis placeat porro perferendis veritatis architecto consectetur doloremque sed!</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    </div>
    
    

    );
}

export default HomePage
