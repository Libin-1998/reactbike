import React, { useEffect, useState } from "react";
import "./Eventedit.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Eventedit() {
  const navigate=useNavigate()
  const [eventinput, seteventinput] = useState({
    event_name: "",
    date: "",
    time: "",
    fee: "",
    place: "",
    image:'',
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://reactbike.onrender.com/api/bike/view/${id}`)
      .then((response) => {
        console.log(response);
        seteventinput(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const eventinputchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    seteventinput({ ...eventinput, [name]: value });
  };
console.log(eventinput);

const imageHandler=(event)=>{    
  seteventinput({...eventinput,image:event.target.files[0]})
  console.log(eventinput.image);
}

  const eventsubmited = (event) => {
    event.preventDefault();

    const data=new FormData()
    data.append('event_name',eventinput.event_name)
    data.append('date',eventinput.date)
    data.append('fee',eventinput.fee)
    data.append('time',eventinput.time)
    data.append('image',eventinput.image)
    data.append('place',eventinput.place)



    axios
      .put(`https://reactbike.onrender.com/api/bike/update/${id}`, data)
      .then((response) => {
        console.log(response);
        if (response.data.updatestatus.modifiedCount === 1) {
          toast.success(response.data.message);
         setTimeout(()=>{
          navigate('/events')

         },3000)
        } else {
          toast.success("Data already updated");

          setTimeout(()=>{
            navigate('/events')
            
           },3000)

        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="container-fluid addevent">
        <ToastContainer />
        <h1 className="htwoevent">Event Edit</h1>
        <div className="formstart">
          <form onSubmit={eventsubmited}>
            <label className="labelcolor">
              event_name<span className="starred">*</span>
            </label>
            <br></br>
            <input
              type="text"
              className="editeventwidth"
              name="event_name"
              value={eventinput.event_name}
              onChange={eventinputchange}
            ></input>
            <br></br>
            <br></br>

            <label className="labelcolor">
              date<span className="starred">*</span>
            </label>
            <br></br>
            <input
              type="text"
              className="editeventwidth"
              name="date"
              value={eventinput.date}
              onChange={eventinputchange}
            ></input>
            <br></br>
            <br></br>

            <label className="labelcolor">
              time<span className="starred">*</span>
            </label>
            <br></br>
            <input
              type="text"
              className="editeventwidth"
              name="time"
              value={eventinput.time}
              onChange={eventinputchange}
            ></input>
            <br></br>
            <br></br>

            <label className="labelcolor">
              fee<span className="starred">*</span>
            </label>
            <br></br>
            <input
              type="text"
              className="editeventwidth"
              name="fee"
              value={eventinput.fee}
              onChange={eventinputchange}
            ></input>
            <br></br>
            <br></br>

            <label className="labelcolor">
              place<span className="starred">*</span>
            </label>
            <br></br>
            <input
              type="text"
              className="editeventwidth"
              name="place"
              value={eventinput.place}
              onChange={eventinputchange}
            ></input>
            <br></br>
            <br></br>

            <label className="labelcolor">
              image<span className="starred">*</span>
            </label>
            <br></br>
            <img src={`/img/${eventinput?.image}`} height={'50px'} width={'50px'} onError={(event)=>event.target.src=`/img/${eventinput?.image.name}`} />
            <br /><br />
            <input
              type="file"
              className="editeventwidth"
              name="image"
              // value={eventinput.image}
              onChange={imageHandler}
            ></input>
            <br></br>
            <br></br>

           

 <div className="buttonevent">
          <button type="submit" className="eventsubmit">
            submit
          </button>
        </div>
          </form>
        </div>
       
      </div>
    </>
  );
}
