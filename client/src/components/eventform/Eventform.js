import React, { useState } from "react";
import "./Eventform.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function Eventform() {
  const navigate=useNavigate()
  const [eventinput, seteventinput] = useState({
    event_name: "",
    date: "",
    time: "",
    fee: "",
    place: "",
  });
  const eventinputchange =(event) => {
    const name=event.target.name;   
    const value=event.target.value;
    seteventinput({...eventinput,[name]:value})
  };

  console.log(eventinput);

  const imageHandler=(event)=>{   
    seteventinput({...eventinput,image:event.target.files[0]})
    console.log(eventinput.image);

  }

  const eventsubmited=(event)=>{
    event.preventDefault()

    const data=new FormData()
    data.append('event_name',eventinput.event_name)
    data.append('date',eventinput.date)
    data.append('fee',eventinput.fee)
    data.append('time',eventinput.time)
    data.append('image',eventinput.image)
    data.append('place',eventinput.place)


    axios.post("https://reactbike.onrender.com/api/bike/add_details",data)
    .then((response)=>{
        console.log(response);
      toast.success(response.data.message)
      setTimeout(() => {
        navigate('/events')
      }, 3000);

    })
    .catch((error)=>{
        console.log(error);
      toast.error('data adding failed')

    })
  } 

  return (
    <>
      <div className="container-fluid addevent">
        <ToastContainer/>
        <h1 className="htwoevent">Events</h1>
        <div className="formstart">
          <form onSubmit={eventsubmited} encType="multipart/form-data">
            <label className="labelcolor">
              event_name<span className="starred">*</span>
            </label>
            <br></br>
            <input type="text" className="eventwidth" name="event_name" onChange={eventinputchange}></input>
            <br></br>
            <br></br>

            <label className="labelcolor">
              date<span className="starred">*</span>
            </label>
            <br></br>
            <input type="text" className="eventwidth" name="date" onChange={eventinputchange}></input>
            <br></br>
            <br></br>

            <label className="labelcolor">
              time<span className="starred">*</span>
            </label>
            <br></br>
            <input type="text" className="eventwidth" name="time" onChange={eventinputchange}></input>
            <br></br>
            <br></br>

            <label className="labelcolor">
              fee<span className="starred">*</span>
            </label>
            <br></br>
            <input type="text" className="eventwidth" name="fee" onChange={eventinputchange}></input>
            <br></br>
            <br></br>

            <label className="labelcolor">
              place<span className="starred">*</span>
            </label>
            <br></br>
            <input type="text" className="eventwidth" name="place" onChange={eventinputchange}></input>
            <br></br>
            <br></br>

            <label className="labelcolor">
              upload Image<span className="starred">*</span>
            </label>
            <br></br>
            <input type="file" className="eventwidth" name="image" onChange={imageHandler}></input>
            <br></br>
            <br></br>

            <div className="buttonevent">
        <button type="submit" className="eventsubmit" >submit</button >
        </div>

          </form>
        </div>
       
      </div>
    </>
  );
}
