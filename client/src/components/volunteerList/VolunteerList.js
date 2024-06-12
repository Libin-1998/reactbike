import React, { useState } from "react";
import "./VolunteerList.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function VolunteerList() {
  const navigate = useNavigate();

  const [team, setteam] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    dob: "",
    state: "",
    city: "",
    gender: "",
    age: "",
  });
  const teamchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setteam({ ...team, [name]: value });
  };
  console.log(team);

  const imageHandler = (event) => {
    setteam({ ...team, image: event.target.files[0] });
    console.log(team.image);
  };

  const volunteerreg = (event) => {
    event.preventDefault();
    const formdata=new FormData()
    formdata.append('firstname',team.firstname)
    formdata.append('phone',team.phone)
    formdata.append('state',team.state)
    formdata.append('gender',team.gender)
    formdata.append('lastname',team.lastname)
    formdata.append('image',team.image)
    formdata.append('dob',team.dob)
    formdata.append('city',team.city)
    formdata.append('age',team.age)

    axios
      .post("http://localhost:8000/api/volregister/add_volunteers", formdata)
      .then((response) => {
        console.log(response);

        toast.success("Added successfully");
        setTimeout(() => {
          navigate("/newvolunteer");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Adding failed");
      });
  };

  return (
    <>
      <div className="container-fluid volBG">
        <form onSubmit={volunteerreg} encType="multipart/form-data">
        <ToastContainer />
        <h1 className="volhone">RACE VOLUNTEERS FORM</h1>
        <div className="volrow">
          <div className="volcolumnone">
              <label for="" className="labelvol">
                First Name
              </label>
              <br />
              <input
                type="text"
                className="volwidthone"
                name="firstname"
                onChange={teamchange}
              ></input>
              <br />
              <br />
              <label for="" className="labelvol">
                Phone
              </label>
              <br />
              <input
                type="text"
                className="volwidthone"
                name="phone"
                onChange={teamchange}
              ></input>
              <br />
              <br />

              <label for="" className="labelvol">
                State
              </label>
              <br />
              <input
                type="text"
                className="volwidthone"
                name="state"
                onChange={teamchange}
              ></input>
              <br />
              <br />
              <label for="" className="labelvol">
                Gender
              </label>
              <br />
              <input
                type="radio"
                className="volwidthfour"
                name="gender"
                value={"male"}
                checked={team.gender == "male"}
                onChange={teamchange}
              ></input>
              <label for="" className="labelvol">
                Male
              </label>

              <input
                type="radio"
                className="volwidthfive"
                name="gender"
                value={"female"}
                checked={team.gender == "female"}
                onChange={teamchange}
              ></input>
              <label for="" className="labelvol">
                Female
              </label>

              <br />
              <br />

              <label for="" className="labelvol">
                upload image
              </label>
              <br />
              <input
                type="file"
                className="volwidthten"
                name="image"
                onChange={imageHandler}
              ></input>
              <br />
              <br />
          </div>

          <div className="volcolumntwo">
            <label for="" className="labelvol">
              Last Name
            </label>
            <br />
            <input
              type="text"
              className="volwidthone"
              name="lastname"
              onChange={teamchange}
            ></input>
            <br />
            <br />
            <label for="" className="labelvol">
              Dob
            </label>
            <br />
            <input
              type="date"
              className="volwidthseven"
              name="dob"
              onChange={teamchange}
            ></input>
            <br />
            <br />
            <label for="" className="labelvol">
              City
            </label>
            <br />
            <input
              type="text"
              className="volwidthone"
              name="city"
              onChange={teamchange}
            ></input>
            <br />
            <br />
            <label for="" className="labelvol">
              Age
            </label>
            <br />
            <input
              type="number"
              className="volwidthnine"
              name="age"
              onChange={teamchange}
            ></input>
            <br />
            <br />
            
          </div>
        
        </div>

        <div className="volbutton">
          <button type="submit" className="volreg">
            REGISTER NOW
          </button>
        </div>
        </form>
        </div>
        
    </>
  )
}
