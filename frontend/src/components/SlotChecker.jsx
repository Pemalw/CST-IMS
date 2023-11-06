import {React, useState, useEffect} from "react";
import axios from "axios";

const MagnifyingGlassIcon = () => {


    return (
        /*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke="currentColor" width="30px" height="30px" border>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0a7 7 0 0014 0z" />
        </svg>*/
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
        
    );
  };

  
  

const SlotChecker = () =>{
    const [slots, setSlots] = useState([]);
    const [avail, setAvail]= useState(0);
    const [date, setDate]= useState(new Date());
    const [time, setTime]= useState("");

    useEffect( () => {
        async function fetchdata(){
            await axios.get('http://127.0.0.1:5000/slot')
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

    const checkAvailability=(e)=>{
        e.preventDefault();
        const now = new Date();
        const hour = now.getHours();       
        const check= new Date(date);
        const hours = parseInt(time.split(":")[0], 10);

        if (hour < 18) {
            if(now.getDay()===check.getDay()){
                slots.forEach((object) => {
                    // Get the appointmentHour and slots.
                    const appointmentHour = object.appointmentHour;
                    const slot = object.slots;                    

                    if(appointmentHour===hours){
                        setAvail(slot);
                        console.log("Success");

                    }
                    console.log("Came here but don't know where to go");
                  
                  });

            }else{
                console.log("Not success")

            }
            
        } else {
            
            if(now.getDay()===(check.getDay()-1)){
                slots.forEach((object) => {
                    // Get the appointmentHour and slots.
                    const appointmentHour = object.appointmentHour;
                    const slot = object.slots;

                    if(appointmentHour===hours){
                        setAvail(slot);
                        console.log("came here");
                    }
                  });
                  console.log("New here");

            }else{
                console.log("There is something we must do");

            }

            
        }

    }

    return(
        <div className=" mt-5 self-center bg-white justify-center border-2 h-4/5 w-4/6">
            <h1 className="mt-2 text-center  text-2xl font-bold"> Check Appointment Availablity </h1>
            <div className="flex justify-center">
                <form className="flex justify-center bg-white h-4/5 w-4/6 rounded-xl">

                    <div className="flex flex-col mx-4 my-4 ">
                        <label className="text-slate-600 ">Date</label>
                        <input type="date" name="dates" className="input input-bordered w-50 max-w-xs content-end" onChange={(e) => setDate(e.target.value)}/>
                    </div>
                    <div className="flex flex-col mx-4 my-4 ">
                        <label className="text-slate-600 ">Time</label>
                        <input name="time" type="time" className="input input-bordered w-50 max-w-xs" onChange={(e) => setTime(e.target.value)}/>
                    </div>
                    <div className="flex flex-row items-center mx-4  mt-4 space-x-4">
                        <button className="flex items-center flex-row  h-10 w-30 justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={checkAvailability}>
                            <div className="">
                                <MagnifyingGlassIcon/>
                            </div>
                            <div>Check</div>
                        </button>
                        <button className="h-10 w-30 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">reset</button>
                    </div>
                    <div className="flex flex-col mx-4 justify-center items-center my-4">
                        <label className="font-bold w-40 text-center">Available slot</label>
                        <label className="border-2 w-10 text-center text-green-500" >{avail}</label>
                    </div>

                </form>
            </div>
        </div>
    );
    
}

export default SlotChecker;