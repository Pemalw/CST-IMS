import React from 'react';

function AddPatientRecord() {

  return (

    <div className="flex flex-col justify-center space-y-8">
        <h1 className="text-xl pl-10 pb-4 font-bold text-center">Add Patient Records</h1>
            <form className="">
                <div className="space-y-4">
                    <div className="flex justify-center flex-col md:flex-row md:space-x-6">
                        <input type="text" placeholder="Type here" className="input input-bordered w-1/4 max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-1/4 max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-1/4 max-w-xs" />
                    </div>
                    <div className="flex flex-wrap justify-center space-y-4">
                        <textarea className="textarea textarea-bordered h-40 w-4/5" placeholder="Diagnosis"></textarea>
                        <input type="text" placeholder="Medicine Prescribed" className="input input-bordered h-20  w-4/5" />
                    </div>
                    <div className="flex justify-center">
                        <button className="btn bg-[#bcdbe6] hover:bg-gradient-to-r from-[#2f5d6e] to-[#5c8a9c] hover:text-white w-32 mt-8 mb-12" type="button">Generate Report</button>
                    </div>
                </div>
            </form>
    </div>
    
  );
}

export default AddPatientRecord;