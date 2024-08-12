import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate=useNavigate()
  const [type, settype] = useState({
    name: "",
    emailid: "",
    state: "",
    phone: "",
    password: "",
    gender: "",
    city: "",
    zip: "",
    dob: "",
  });

  const typechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    settype({ ...type, [name]: value });
  };
  console.log(type);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reactbike.onrender.com/api/reg/create", type)
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);

setTimeout(() => {
  navigate('/login')
}, 2000);

      })
      .catch((error) => {
        console.log(error);
        toast.error("error to register");
      });
  };

  return (
    <>
      <div className="container-fluid bgimage">
        <ToastContainer />
        <h1
          style={{ display: "flex", justifyContent: "center", color: "yellow" ,paddingTop:'50px'}}
        >
          REGISTRATION
        </h1>

        <form action="" onSubmit={handleSubmit} className="regforms">
          <div
            className="parentdiv bg-transparent"
            style={{ fontWeight: "bold" }}
          >
            <div className="columnreg">
              <label for="">
                Name<span className="star">*</span>
              </label>
              <br></br>
              <input
                type="text"
                className="inputwidth"
                name="name"
                onChange={typechange}
                required
              />
              <br></br>

              <label for="">
                Email id<span className="star">*</span>
              </label>
              <br></br>
              <input
                type="text"
                className="inputwidth"
                name="emailid"
                onChange={typechange}
                required
              ></input>
              <br></br>
              <label for="">
                State<span className="star">*</span>
              </label>
              <br></br>
              <input
                type="text"
                className="inputwidth"
                name="state"
                onChange={typechange}
                required
              ></input>
              <br></br>
              <label for="">
                Phone<span className="star">*</span>
              </label>
              <br></br>
              <input
                type="text"
                className="inputwidth"
                name="phone"
                onChange={typechange}
                required
              ></input>
              <br></br>

              <div className="row fullwidth">
              <div className="column">

                  <label for="">
                    Gender<span className="star">*</span>
                  </label>
                  <br></br>
                  <input
                    type="radio"
                    name="gender"
                    value={"male"}
                    checked={type.gender == "male"}
                    onChange={typechange}
                    required
                  />
                  <label className="" style={{ paddingRight: "10px" }}>
                    Male
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    value={"female"}
                    checked={type.gender == "female"}
                    onChange={typechange}
                    required
                  />
                  <label className="">Female</label>
                </div>
              </div>
            </div>
            <div className="columnreg">

              <label for="">
                Password<span className="star">*</span>
              </label>
              <br></br>
              <input
                type="password"
                className="inputwidth"
                name="password"
                onChange={typechange}
                required
              ></input>
              <br></br>

              <label for="">
                City<span className="star">*</span>
              </label>
              <br></br>
              <input
                type="text"
                className="inputwidth"
                name="city"
                onChange={typechange}
                required
              ></input>
              <br></br>

              <label for="">
                Zip<span className="star">*</span>
              </label>
              <br></br>
              <input
                type="text"
                className="zipwidth"
                name="zip"
                onChange={typechange}
                required
              ></input>
              <br></br>

              <label for="">
                Date of Birth<span className="star">*</span>
              </label>
              <br></br>
              <input
                type="date"
                className="dobwidth"
                name="dob"
                onChange={typechange}
                required
              ></input>
              <br></br>
            </div>
          </div>
          <div className="clicked">
            <button
              className="click"
              type="submit"
              // onClick={handleSubmit}
              style={{
                backgroundColor: "yellow",
                border: "0",
                padding: "10px",
                marginBottom: "3px",
              }}
            >
              Register now
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
