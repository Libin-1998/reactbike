import React, { useEffect, useState } from "react";
import "./Event.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Event() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/bike/view")
      .then((response) => {
        console.log(response.data.message);
        setDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8000/api/bike/delete/${id}`)
      .then((response) => {
        console.log(response);
        toast.success(response.data.message)
setTimeout(()=>{
  window.location.reload()

},3000)

      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="container">
        <ToastContainer />
        <h1 className="eventheading">
          <span className="race">RACE </span>
          <span className="event">EVENTS</span>
        </h1>
        <div className="eventrow">
          {details.map((events) => (
            <div className="oneimg" data-aos="flip-up">
              <img
                src={`/img/${events.image}`}
                height={"220px"}
                width={"350px"}
              ></img>
              <h3>{events.event_name}</h3>
              <p>
                <span className="racedate">{events.date}</span>
              </p>
              <p>
                <i class="bi bi-alarm-fill"></i>
                <b>{events.time}</b>
              </p>
              <p>
                <i class="bi bi-currency-dollar"></i>
                <b>{events.fee}</b>
              </p>
              <p>
                <i class="bi bi-geo-alt-fill"></i>
                <b>{events.place}</b>
              </p>
              <p>
                {" "}
                The motorcycle sport of racing includes <br></br>motorcycle road
                racing and off-road racing,<br></br> both either on circuits
                <br></br> or open courses,and track racing
              </p>
              <div className="booknowbutton">
                <button className="eventbutton">Book Now</button>
                <button className="editbutton">
                  <Link to={`/eventedit/${events._id}`} className="linkcolor">
                    Edit
                  </Link>
                </button>
                <button
                  className="deletebutton"
                  onClick={() => handleDelete(events._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
