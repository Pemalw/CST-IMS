import React from 'react'

export const MedicalReport = () => {
  return (
    <div class="h-screen">

      <div class="container mx-auto">
        <div class="bg-[#003046] w-70 h-20 mt-4 flex items-center justify-center shadow-lg rounded-lg">
          <div><h1 className="text-3xl font-bold text-center text-white ">View Medical Report</h1> </div>
        </div>
    
        <div className="hero-content text-center mt-6">
          <div className="max-w-md">
            <input type="text" placeholder="Enter Code Number " className="input input-bordered border-[#003046] w-full max-w-xs" />
            <p className="py-6 text-[#dc2626] "> NOTE: The medical code number will be provided through the email. From that email enter the code to generate your medical report and veiw it. facere quidem velit fuga?</p>
            <button className="btn btn-accent bg-[#61AAC5] text-white font-bold">Submit</button>
          </div>
        </div> 
      </div>
    </div>

  )
}

export default MedicalReport