
import React from 'react';
import "./adminpost.css";

export default function Write() {
  return (

    
    <div className="write flex flex-col justify-items-center">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />


      <form className="writeForm">
        <label htmlFor="fileInput">
          <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
          {/* <i className="writeIcon fas fa-plus"></i> */}
        </label>

        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Write in Details..."
            type="text"
            autoFocus={true}
          />
        </div> 
         
        
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>


    </div>
  );
}
