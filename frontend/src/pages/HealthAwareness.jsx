import React from 'react'
import Post from '../components/Post'


export default function Single() {
  return (
    <div>
      <h1 className=" text-2xl md:text-3xl font-bold text-center my-10 text-[#2f5d6e]">Health Awareness</h1>
      <div className="flex flex-col justify-center mx-1 mb-10">
        <Post />
      </div>
    </div>  
       
  );
}