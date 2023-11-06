import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


 //Create function to fetch all items from database --- we will use useEffect hook 

export default function Post({img}) {
  const [ListItems, setListItems] = useState([]);      

  useEffect(()=>{
    const getItemsList = async() =>{
  
      try{
        const res = await axios.get('http://localhost:5001/item')
        setListItems(res.data);
        console.log('render')
  
      }catch(err){
        console.log(err)
      }
    }
    getItemsList();
  }, []);


  return (
    <div className="flex flex-wrap justify-center mx-1 mb-10">
      {ListItems.map((item) => (
        <div key={item._id} className="post w-96 mx-4 flex flex-col mt-3">
          <Link to={`/SinglePost-page/${item._id}`}>
            <div className="flex flex-wrap justify-center p-6 rounded-xl shadow-lg hover:shadow-[#61AAC5] hover:bg-[#61AAC5] hover:text-white">
              <img className="postImg w-96 h-72 object-cover" src={img} alt="" />
              <div className="postTitle text-3xl font-semibold mt-4 cursor-pointer">
                {item.title}
              </div>
              <span className="postDate font-lora italic text-sm text-gray-600 mt-4"> {new Date(item.date).toLocaleDateString()}</span>
              <p className="postDesc font-varela text-base leading-6 text-gray-700 mt-4 overflow-hidden overflow-ellipsis line-clamp-4">
                {item.content}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
