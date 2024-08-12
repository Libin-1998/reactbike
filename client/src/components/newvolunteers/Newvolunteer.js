import React, { useEffect, useState } from "react";
import "./Newvolunteer.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { bikezone } from "../../redux/reducers/Bikeslice";

export default function Newvolunteer() {
  // const [data, setData] = useState([]);

  const newbikes=useSelector((state)=>state.bike.bikesdata)
console.log(newbikes);

const dispatch=useDispatch()


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/volregister/view_volunteers")
      .then((response) => {
        console.log(response.data.data);
        // setData(response.data.data);
        dispatch(bikezone(response.data.data))
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  console.log(newbikes);

  const volDelete=(id)=>{
    console.log(id);
    axios.delete(`http://localhost:8000/api/volregister/delete/${id}`)
    .then((response)=>{
      console.log(response);
      toast.success(response.data.message)

      setTimeout(()=>{
      window.location.reload()

      },3000)

    })
    .catch((error)=>{
      console.log(error);
      toast.error(error.response.data.message)
    })
  }


  return (
    <>
      <div className="container-fluid newvol">
        <ToastContainer/>
        <h1 className="volhead">VOLUNTEERS LIST</h1>
        <div className="newrow">
          {newbikes.map((volunteer) => (
            <div className="newcolumn">
              <div className="firstone">
                <img src={`/img/${volunteer.image}`}className="volimgname"></img>
                <h2 className="nameclass">
                  <i class="fa fa-user" aria-hidden="true"></i>{volunteer.firstname}
                </h2>
                <h4 className="">
                  <i class="fa fa-phone" aria-hidden="true"></i>{volunteer.phone}
                </h4>
                <h5>
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>{volunteer.dob}
                </h5>
                <h5>
                  <i class="fa fa-location-arrow" aria-hidden="true"></i>{volunteer.state}
                </h5>
                <h5>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>{volunteer.city}
                </h5>
                <h5>
                  <i class="fa fa-venus-mars" aria-hidden="true"></i>{volunteer.gender}
                </h5>
                <h5>
                  <i class="fa fa-child" aria-hidden="true"></i>{volunteer.age}
                </h5>
                <button className="voledit"><Link to={`/volunteeredit/${volunteer._id}`} className="ulinevol">Edit</Link></button>
                <button className="voldelete" onClick={()=>volDelete(volunteer._id)}>Delete</button>


              </div>
              
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
