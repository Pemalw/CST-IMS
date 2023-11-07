import React, {useState, useEffect} from 'react'
import axios from 'axios'



const AppointmentForm = () => {
    const [clientName, setClientName] = useState('');
    const [appointTime, setAppointTime] = useState('');
    const [appointDate, setAppointDate] = useState(new Date());
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [gender, setGender] = useState('');
    const [colId, setColId] = useState(0);
    const [contactNo, setContactNo] = useState(0);
    const [email, setEmail] = useState('');
    const [slots, setSlots] = useState([]);
    const [states, setStates]=useState("");

    useEffect( () => {
        async function fetchdata(){
            await axios.get('http://127.0.0.1:5001/slot')
        .then((response) => {
            setSlots(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        }
        fetchdata();
        }, [slots]
    );


    function Availablity(){
        const now = new Date();
        const hour = now.getHours();       
        const check= new Date(appointDate);
        const hours = parseInt(appointTime.split(":")[0], 10);
        let val=0;


        if (hour < 18) {
            const a=now.getDate();
            const b=check.getDate();
            console.log(a);
            console.log(b);
            if(now.getDate()===check.getDate()){
                slots.forEach((object) => {
                    // Get the appointmentHour and slots.
                    const appointmentHour = object.appointmentHour;
                    const slot = object.slots;                    

                    if(appointmentHour===hours){
                        if(slot>0){
                            console.log("rn success")
                            val=1;
                        }
                        

                    }
                  
                  });

            }else{
                console.log("Not success")
                val= 0;

            }
            
        } else {
            if(now.getDay()===check.getDay()-1){
                slots.forEach((object) => {
                    // Get the appointmentHour and slots.
                    const appointmentHour = object.appointmentHour;
                    const slot = object.slots;

                    if(appointmentHour===hours){
                        if(slot>0){
                            val= 1;
                        }
                    }
                  });

            }else{

                val= 0;

            }

            
        }
        return val;
        
    }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    


    try{
        const checkVal=Availablity();
        console.log(checkVal);
        if(checkVal==1){
            const today = new Date();
            const todayString = today.toISOString().split('T')[0];
            const randomNumber = Math.floor(Math.random() * 10000);
            const applicationNo = `CST${todayString}-${randomNumber}`;
            const state="no";

    
            if (!clientName || !appointTime || !appointDate || !dateOfBirth || !gender || !colId || !contactNo || !email || !state || !applicationNo) {
                console.log('Invalid request body.');
            }

            const formData=new FormData();

            formData.append('clientName', clientName);
            formData.append('appointTime', appointTime);
            formData.append('appointDate', appointDate);
            formData.append('dateOfBirth', dateOfBirth);
            formData.append('gender', gender);
            formData.append('colId', parseInt(colId));
            formData.append('contactNo', parseInt(contactNo));
            formData.append('email', email);
            formData.append("state", "no");
            formData.append("applicationNo", applicationNo);
            console.log(formData.values);

            const requestHeaders = {
                'Content-Type': 'application/json',
            };
            
            const response = await axios.post('http://localhost:5001/appointment/add/', formData, {
                headers: requestHeaders,
            }).then(async()=>{

                setStates("Successfully added!");
                setClientName("");
                setColId(0);
                setContactNo(0);
                setDateOfBirth(new Date());
                setEmail("");
                setGender("");
                const hours = parseInt(appointTime.split(":")[0], 10);
                let id;
                let newslot;
                slots.find(slot => {if(slot.appointmentHour === hours){
                    id=slot._id;
                    newslot=slot.slots;
                }} );

                const res = await axios.put(`http://localhost:5001/slot/update/${id}`, {
                    appointmentHour: hours,
                    slots: newslot-1 ,
                   
                }).then(()=>{
                    console.log("succesfully updated the slots");
                }).catch((error)=>{
                    console.log("error");
                })

            }).catch(()=>{

            });

            
        }else{
                //add code for changing font or anuthing here to let them know that it is not working
            console.log("CANNOT");
        }
            
            
        }catch(error){
                console.log("errror:");
                console.log(error);

        }


  };


  return (

    <div className="flex justify-center bg-[#bcdbe6] h-auto w-full">
        <div className="bg-white m-5 lg:m-20 h-auto w-full lg:h-4/5 md:w-4/5 lg:w-4/6 rounded-xl">
            <div className="text-center mt-16 text-2xl font-bold text-[#003046]">Appointment Form</div>
            <form className="flex justify-center">
                <div className="flex flex-col space-y-4 mt-10">
                    <div className="space-y-8">
                        <div className="flex flex-row space-x-8">
                            <input type="text" name='colId' placeholder="Student ID" className="input input-bordered w-full max-w-xs"  onChange={(e) => setColId(e.target.value)}/>
                            <input type="text" name="clientName" placeholder="Name" className="input input-bordered w-full max-w-xs"  onChange={(e) => setClientName(e.target.value)} />
                        </div>
                        <div className="flex flex-row space-x-8">
                            <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs"  onChange={(e) => setEmail(e.target.value)}/>
                            <input type="tel"  name='contactNo' placeholder="Contact Number" className="input input-bordered w-full max-w-xs"  onChange={(e) => setContactNo(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-8">
                        <div className="w-full">
                            <label className="label">
                              <span className="label-text">Gender</span>
                            </label>
                            <select name='gender' className="select select-bordered w-full max-w-xs" onChange={(e) => setGender(e.target.value)}>
                              <option disabled selected>Select gender</option>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="label">
                              <span className="label-text">Date of Birth</span>
                            </label>
                            <input type="date" name='dateOfBirth' placeholder="Date of Birth" className="input input-bordered w-full max-w-xs"  onChange={(e) => setDateOfBirth(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-8">
                        <div className="w-full">
                            <label className="label">
                              <span className="label-text">Appointment Date</span>
                            </label>
                            <input type="date" name='appointDate'  placeholder="appointmentdate" value={appointDate} className="input input-bordered w-full max-w-xs" onChange={(e) => setAppointDate(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <label className="label">
                              <span className="label-text">Appointment Time</span>
                            </label>
                            <input type="time" name='appointTime' placeholder="appointmenttime" value={appointTime} className="input input-bordered w-full max-w-xs" onChange={(e) => setAppointTime(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn bg-[#bcdbe6] hover:bg-gradient-to-r from-[#2f5d6e] to-[#5c8a9c] hover:text-white w-32 mt-8 mb-12" type="submit" onClick={handleSubmit}>Register</button>
                    </div>
                    {//pema can you design the below div
                    }
                    <div>{states}</div>
                </div>
                
            </form>
            </div>
        </div>
 
  );
}

export default AppointmentForm;