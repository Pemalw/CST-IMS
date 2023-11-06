import React from 'react'

const TrackAppointment = () => {
  return (
    <div className="flex justify-center bg-[#bcdbe6] h-screen w-full">
        <div className="bg-white m-20 h-auto w-4/6 rounded-xl">
            <div className="text-center mt-16 text-2xl text-[#003046] font-bold">Track Appointment</div>
            <div className="flex justify-center mt-16">
              <div className="form-control">
               <div className="input-group">
                 <input type="text" placeholder="Enter Application Number" className="input input-bordered" />
                 <button className="btn btn-square">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                 </button>
               </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default TrackAppointment