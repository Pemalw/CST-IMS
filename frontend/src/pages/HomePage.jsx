import React from 'react';
import home from '../assets/homepage.jpg';
import home1 from '../assets/images/about-header.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={home} className="w-full lg:w-88 h-80 rounded-lg shadow-2xl" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle btn-ghost">❮</a> 
                <a href="#slide2" className="btn btn-circle btn-ghost">❯</a>
              </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
              <img src={home1} className="w-full  lg:w-88 h-80 rounded-lg shadow-2xl" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle btn-ghost">❮</a> 
                <a href="#slide3" className="btn btn-circle btn-ghost">❯</a>
              </div>
            </div> 
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-bold">CST Infirmary Management System</h1>
            <p className="py-6 mt-4 lg:mt-7">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa dolore
              eligendi earum voluptate beatae, aspernatur, inventore, natus magni quos iusto facilis placeat porro perferendis
              veritatis architecto consectetur doloremque sed!
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;