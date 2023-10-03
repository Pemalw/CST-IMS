import React from 'react';

function AddPatientRecord() {

  return (
    <div className="flex justify-center">
        <div className='border-2 w-5/6 shadow-md bg-slate-50'>
            <h1 className='text-lg p-5 font-bold'>Add Patient Records</h1>
            <p className='px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae sequi commodi sint, nobis, 
                amet dignissimos accusantium consequatur nesciunt, fugit facere voluptatum libero magni impedit error 
                blanditiis placeat tenetur harum.</p>
                <form className="flex flex-row justify-content-center align-items-center">
                    <div className="flex-1">
                        <input className='h-10 my-5 w-80 border-2 border-black bg-slate-100 rounded-md ps-7' placeholder="Name" /><br></br>
                        <input className='h-10 my-5 w-80 border-2 border-black bg-slate-100 rounded-md ps-7' placeholder="CID Number" /><br></br>
                        <input className='h-10 my-5 w-80 border-2 border-black bg-slate-100 rounded-md ps-7' placeholder="Age" /><br></br>
                        <input className='h-10 my-5 w-80 border-2 border-black bg-slate-100 rounded-md ps-7' placeholder="Gender" /><br></br>
                        <input className='h-10 my-5 w-80 border-2 border-black bg-slate-100 rounded-md ps-7' placeholder="Date" /><br></br>
                    </div>
                    <div className="flex-1">
                        <textarea className='h-60  mb-5 mt-10 w-80 border-2 border-black bg-slate-100 rounded-md ps-7' placeholder="Diagnosis"></textarea><br></br>
                        <input className='h-10 mb-10 mt-5 w-80 border-2 border-black bg-slate-100 rounded-md ps-7'placeholder="Medicine Prescribed" />
                    </div>
                </form>
            <button className=' bg-cyan-500 mb-10 rounded-sm h-8 w-20 hover:bg-cyan-200' >Add data</button>
        </div>
    </div>
    
  );
}

export default AddPatientRecord;