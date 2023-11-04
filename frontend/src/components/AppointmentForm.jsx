import React from 'react'

const AppointmentForm = () => {
  return (

    <div className="flex justify-center bg-[#bcdbe6] h-auto w-full">
        <div className="bg-white m-5 lg:m-20 h-auto w-full lg:h-4/5 md:w-4/5 lg:w-5/6 rounded-xl">

            <div className="text-center mt-16 text-2xl font-bold">Appointment Form</div>
            <form className="flex justify-center">
                <div className="flex flex-col space-y-10 my-8 md:mt-16">
                    <div className="flex flex-wrap justify-center md:flex-row md:space-x-8 md:space-y-0 space-y-5">
                        <input type="text" placeholder="First Name" className="input input-bordered w-5/6 md:w-96 max-w-xs" />
                        <input type="text" placeholder="Last Name" className="input input-bordered w-5/6 md:w-96 max-w-xs" />
                    </div>
                    <div className="flex flex-wrap justify-center md:flex-row md:space-x-8 md:space-y-0 space-y-5">
                        <input type="email" placeholder="Email" className="input input-bordered w-5/6 md:w-full max-w-xs" />
                        <input type="number" placeholder="Mobile Number" className="input input-bordered w-5/6 md:w-full max-w-xs" />
                    </div>
                    <div className="flex flex-wrap justify-center md:flex-row md:space-x-8 md:space-y-0 space-y-5">
                        <input type="text" placeholder="Student ID" className="input input-bordered w-5/6 md:w-full max-w-xs" />
                        <input type="date" placeholder="Date of Birth" className="input input-bordered w-5/6 md:w-full max-w-xs" />
                    </div>
                    <div className="flex flex-wrap justify-center md:flex-row md:space-x-8 md:space-y-0 space-y-5">
                        <select className="select select-bordered w-5/6 md:w-full max-w-xs">
                          <option disabled selected>Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        <input type="time" className="input input-bordered w-5/6 md:w-full max-w-xs" />
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