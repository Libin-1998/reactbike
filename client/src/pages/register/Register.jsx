import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <>
      {/* <div class="container-fluid reg">
        <h1 class=" text-center text-warning pt-3">REGISTERATION</h1>
        <form>
           <div class="row  text-danger rows-gap-2">
                <div class="col-6 p-3 firstcolumn">
                    <label for=""><b>Name</b><span class="text-danger">*</span></label><br></br>
                    <input type="text" class="namewidth mb-2 opacity-50"></input><br></br>

                    <label for=""><b>Email id</b><span class="text-danger">*</span></label><br></br>
                    <input type="text" class="emailwidth mb-2 opacity-50"></input><br></br>

                    <label for=""><b>State</b><span class="text-danger">*</span></label><br></br>
                    <input type="text" class="statewidth mb-2 opacity-50"></input><br></br>

                    <label for=""><b>Phone</b><span class="text-danger">*</span></label><br></br>
                    <input type="text" class="phonewidth mb-2 opacity-50"></input><br></br>

                    <div class="row">
                        <div class="col">
                    <label for=""><b>Gender</b><span class="text-danger">*</span></label><br></br>
                    <input type="radio"></input>
                    <label for=""><b>Male</b></label>

                    <input type="rado" class"m-3"></input>
                    <label for=""><b>Female</b></label>
                    </div>
                    <div class="col">
                    <label for=""><b>T-shirt Size</b><span class="text-danger">*</span></label><br></br>
                    <input type="number"class="size opacity-50"></input>
                    </div>
                    </div>


                </div>
                <div class="col-6 p-3">
                <label for=""><b>Password</b><span class="text-danger">*</span></label><br></br>
                    <input type="password" class="passwordwidth mb-2 opacity-50"></input><br></br>

                    <label for=""><b>City</b><span class="text-danger">*</span></label><br></br>
                    <input type="text" class="citywidth mb-2 opacity-50"></input><br></br>

                    <label for=""><b>Zip</b><span class="text-danger">*</span></label><br></br>
                    <input type="text" class="zipwidth mb-2 opacity-50"></input><br></br>

                    <label for=""><b>Date Of Birth</b> <span class="text-danger">*</span></label><br></br>
                    <input type="date" class="zipwidth mb-2 opacity-50"></input><br></br>

                    <label for=""><b>Choosen Race</b><span class="text-danger">*</span></label><br></br>
                    <input type="radio"></input>
                    <label for=""><b>5k-$25</b></label>

                    <input type="radio" class="m-3"></input>
                    <label for=""><b>10k-$25</b></label>
                </div>
            </div>
        </form>

            <div class="but text-center pb-5">
            <button type="submit" class="bg-warning none"><b>Register Now</b></button>
            </div>
    </div> */}

<div className="container-fluid bgimage">
        <h1
          style={{ display: "flex", justifyContent: "center", color: "yellow" }}
        >
          REGISTRATION
        </h1>

      <div className="parentdiv" style={{fontWeight:"bold"}}>
        <div className="column">
          <label for="">
            Name<span className="star">*</span>
          </label>
          <br></br>
          <input type="text" className="inputwidth"></input>
          <br></br>

          <label for="">
            Email id<span className="star">*</span>
          </label>
          <br></br>
          <input type="text" className="inputwidth"></input>
          <br></br>
          <label for="">
            State<span className="star">*</span>
          </label>
          <br></br>
          <input type="text" className="inputwidth"></input>
          <br></br>
          <label for="">
            Phone<span className="star">*</span>
          </label>
          <br></br>
          <input type="text" className="inputwidth"></input>
          <br></br>

          <div className="row fullwidth">
            <div className="column">
              <label for="">
                Gender<span className="star">*</span>
              </label>
              <br></br>
              <input type="radio" value={"male"}></input>
              <label className=""style={{paddingRight:"10px"}}>Male</label>
              <input type="radio" value={"male"}></input>
              <label className="">Female</label>
            </div>

            <div className="column">
              <label for="">
                T-shirt Size<span className="star">*</span>
              </label>
              <br></br>
              <input type="number" className="sizebox"></input>
              <br></br>
            </div>
          </div>
        </div>
        <div className="column">
          <label for="">
            Password<span className="star">*</span>
          </label>
          <br></br>
          <input type="password" className="inputwidth"></input>
          <br></br>

          <label for="">
            City<span className="star">*</span>
          </label>
          <br></br>
          <input type="text" className="inputwidth"></input>
          <br></br>

          <label for="">
            Zip<span className="star">*</span>
          </label>
          <br></br>
          <input type="text" className="zipwidth"></input>
          <br></br>

          <label for="">
            Date of Birth<span className="star">*</span>
          </label>
          <br></br>
          <input type="date" className=""></input>
          <br></br>

          <label for="">
            Choosen Race<span className="star">*</span>
          </label>
          <br></br>
          <input type="radio" className=""></input>
          <label for="" style={{paddingRight:"10px"}}>5k-$25</label>
          <input type="radio" className=""></input>

          <label>5k-$25</label>
        </div>
      </div>
      <div className="clicked">
        <button
          className="click"
          style={{ backgroundColor: "yellow", border: "0",padding:"10px",marginBottom:"3px" }}
        >
          Register now
        </button>
      </div>
      </div>

    </>
  );
}
