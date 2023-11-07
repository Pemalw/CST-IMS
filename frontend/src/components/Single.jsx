// import { Link } from "react-router-dom";
// // import "./singlePost.css";


// export default function SinglePost() {
//   return (

//     <div className="singlePost bg-base-200 pb-10">
//       <div className="navbar px-5"> 
//         <button type="button" class="flex items-center justify-center w-1/3 sm:w-auto px-2 py-2 text-sm text-gray-700 transition-colors duration-200 bg-blue-300 border rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
//           <svg class="w-4 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
//           </svg>
//           <span> 
//             <Link to="/health-awareness" >
//               Go back
//             </Link>
//           </span>
//         </button>
//       </div>
     
//       <div className="singlePostWrapper px-5">
//         <div className="flex items-center justify-center">
//           <img
//             className="singlePostImg w-50 h-50 rounded-lg object-cover "
//             src="https://cdn.pixabay.com/photo/2013/11/20/09/36/virus-213708_640.jpg"
//             alt=""
//           />
//         </div>

//         <h1 className="singlePostTitle text-center my-4 text-xl lg:text-2xl font-serif">
//           Health Awareness Article
//         </h1>

//         <div className="singlePostInfo mb-5 px-5 md:px-10 flex justify-between italic text-sm md:text-md text-yellow-500 font-varela ">
//           <span>
//             Source:
//             <b className="singlePostAuthor ml-1">
//               <Link className="link" to="/posts?username=Safak">
//                 BBS News
//               </Link>
//             </b>
//           </span>
//           <span>22nd August 2023</span>
//         </div>
        
//         <p className="singlePostDesc text-gray-600 text-md px-5 md:px-10 text-justify lg:text-lg">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
//           quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
//           Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
//           eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//           error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
//           impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
//           odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos!
//           <br />
//           <br />
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
//           quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
//           Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
//           eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//           error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
//           impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
//           odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
//         </p>
//       </div>

//     </div>
//   );
// }


import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SinglePost() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/item/${id}`);
        setItem(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItem();
  }, [id]); // Empty dependency array ensures the effect runs once after the initial render

  if (item === null) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any other loading indicator
  }

  const { title, content, source, date } = item;

    return (

    <div className="singlePost bg-base-200 pb-10">
      <div className="navbar px-5"> 
        <button type="button" class="flex items-center justify-center w-1/3 sm:w-auto px-2 py-2 text-sm text-gray-700 transition-colors duration-200 bg-blue-300 border rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
          <svg class="w-4 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span> 
            <Link to="/health-awareness" >
              Go back
            </Link>
          </span>
        </button>
      </div>
     
      <div className="singlePostWrapper px-5">
        <div className="flex items-center justify-center">
          <img
            className="singlePostImg w-50 h-50 rounded-lg object-cover "
            src={`http://localhost:5001/uploads/${item.image}`}
            alt=""
        
          />
        </div>

        <h1 className="singlePostTitle text-center my-4 text-xl lg:text-2xl font-serif">
        {title}
        </h1>

        <div className="singlePostInfo mb-5 px-5 md:px-10 flex justify-between italic text-sm md:text-md text-yellow-500 font-varela ">
          <span>
            Source:
            <b className="singlePostAuthor ml-1">

            <a className="link" href={source} target="_blank" rel="noopener noreferrer">
              {source}
            </a>
            </b>
          </span>
          <span>{new Date(item.date).toLocaleDateString()}</span>
        </div>
        
        <p className="singlePostDesc text-gray-600 text-md px-5 md:px-10 text-justify lg:text-lg">
          {content}
        </p>
      </div>

    </div>
  );
}


 
