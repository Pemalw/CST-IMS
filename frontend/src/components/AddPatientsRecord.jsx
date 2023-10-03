import React from 'react';

function AddPatientRecord() {

  return (
    <div>
        <div className='border-2 w-5/6 shadow-md bg-slate-50 felx justify-center'>
            <h1 className='text-start p-5 font-bold '>Add Patient Records</h1>
            <p className='px-20 my-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae sequi commodi sint, nobis, 
                amet dignissimos accusantium consequatur nesciunt, fugit facere voluptatum libero magni impedit error 
                blanditiis placeat tenetur harum.</p>
                <form className="flex flex-row my-10">
                    <div className="flex flex-col w-1/2 items-center">
                        <input className='block  h-10  w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder="Name" type='text'/><br></br>
                        <input className='block  h-10  w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder="CID Number" type='text'/><br></br>
                        <input className='block  h-10  w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder="CID Number" type='text'/><br></br>
                        <input className='block  h-10  w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder="Age" type='number'/><br></br>
                        <input className='block  h-10  w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder="Gender" type='text'/><br></br>
                        <input className='block  h-10  w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder="Date" type='date'/><br></br>
                    </div>
                    <div className="flex flex-col w-1/2 items-center">
                        <textarea className='block  mt-5 h-60  w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' placeholder="Diagnosis" type='text'></textarea><br></br>
                        <input className='block  h-10  w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'placeholder="Medicine Prescribed" type='text'/>
                    </div>
                </form>
            <button className=' bg-cyan-500 mb-10 rounded-sm h-8 w-20 hover:bg-cyan-200 flex' >Add data</button>
        </div>
    </div>
    
  );
}

export default AddPatientRecord;