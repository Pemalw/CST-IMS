import React from 'react'

const AppointmentForm = () => {
  return (
    <div className="flex justify-center bg-[#bcdbe6] h-screen w-full">
        <div className="bg-white m-20 h-4/5 w-4/6 rounded-xl">
            <div className="text-center mt-16 text-2xl font-bold">Appointment Form</div>
            <form className="flex justify-center">
                <div className="flex flex-col space-y-10 mt-16">
                    <div className="flex flex-row space-x-8">
                        <input type="text" placeholder="First Name" className="input input-bordered w-96 max-w-xs" />
                        <input type="text" placeholder="Last Name" className="input input-bordered w-96 max-w-xs" />
                    </div>
                    <div className="flex flex-row space-x-8">
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Mobile Number" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex flex-row space-x-8">
                        <input type="text" placeholder="Student ID" className="input input-bordered w-full max-w-xs" />
                        <input type="date" placeholder="Date of Birth" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex flex-row space-x-8">
                        <select className="select select-bordered w-full max-w-xs">
                          <option disabled selected>Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        <input type="date" placeholder="Date of Birth" className="input input-bordered w-full max-w-xs" />
                        <input type="time" placeholder="Date of Birth" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="flex justify-center">
                        <button className="btn bg-[#bcdbe6] hover:bg-gradient-to-r from-[#2f5d6e] to-[#5c8a9c] hover:text-white w-32">Register</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AppointmentForm