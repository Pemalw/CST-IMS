import React from 'react'
import Post from '../components/Post'
// import "./HealthAwareness.css";


export default function Single() {
  return (
    
    <div>
      <h1 className="text-2xl font-bold text-center mt-10 text-[#2f5d6e]">Health Awareness</h1>
      <div className="flex flex-wrap justify-center mx-1 mb-10">
        <Post img="https://cdn.pixabay.com/photo/2013/11/20/09/36/virus-213708_640.jpg" />
        <Post img=" https://images.pexels.com/photos/6942008/pexels-photo-6942008.jpeg?auto=compress&cs=tinysrgb&w=400"/>
        <Post img="https://images.pexels.com/photos/2382223/pexels-photo-2382223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <Post img=" https://images.pexels.com/photos/6942008/pexels-photo-6942008.jpeg?auto=compress&cs=tinysrgb&w=400"/>
      </div>
    </div>
    
  );
}