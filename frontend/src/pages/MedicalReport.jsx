import React from 'react'

export const MedicalReport = () => {
  return (
    <div class="container h-screen bg-base-200">

    <div class="container mx-auto">
    <div class="bg-[#61AAC5] w-70 h-20 mt-4  flex items-center justify-center shadow-lg rounded-lg">
      
    <div><h1 className="text-3xl font-bold text-center text-black ">View Medical Report</h1> </div>
    </div>

    <div>
    {/* <div className="container mx-auto bg-indigo-900">
        </div> */}
    
  <div className="hero-content text-center mt-6">
    <div className="max-w-md">
      <input type="text" placeholder="Enter Code Number " className="input input-bordered input-primary w-full max-w-xs" />
      <p className="py-6 text-[#dc2626] "> NOTE: The medical code number will be provided through the email. From that email enter the code to generate your medical report and veiw it. facere quidem velit fuga?</p>
      <button className="btn btn-primary bg-[#61AAC5] text-white font-bold">Submit</button>
    </div>
  </div> 
      
    <div/>
    </div>
    </div>




    {/* <div className="container mx-auto bg-blue-500">
        </div>mt
    
  <div className="hero-content text-center">
    <div className="max-w-md">

      <h1 className="text-4xl font-bold"> View Medical Report </h1>

      <input type="text" placeholder="Enter Medical Code" className="input input-bordered input-primary w-full max-w-xs" />

      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Submit</button>
    </div>
  </div> */}
</div>



  )
}

export default MedicalReport