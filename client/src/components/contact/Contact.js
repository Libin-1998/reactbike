import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [contact, setcontact] = useState({
    fullname: "",
    emailid: "",
    yourmessage: "",
  });

  const contactchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setcontact({ ...contact, [name]: value });
  };

  console.log(contact);

  return (
    <>
      {/* <div class="container-fluid contact mt-5">
        <div class="heading">
          <h1 class="space">
            <b>
              HAVE QUESTIONS?<br></br>CONTACT US
            </b>
          </h1>
        </div>
        <form>
          <div class="row m-5 contactbox">
            <div class="col-lg-2 col-md-12  me-4 box">
              <input type="" placeholder="Full Name" class="nameheight"></input>

              <input type="" placeholder="Email" class="emailheight"></input>
            </div>
            <div class="col-lg-2 col-md-12">
              <input
                type=""
                placeholder="Your Message"
                class="messageheight"
              ></input>
            </div>
          </div>
        </form>

        <div class="check">
          <input type="checkbox" class="form-check-input"></input>
          <label class="ms-2 text-white">
            By using this form you agree with the storage and handling of
            <br></br> your data by this website.
          </label>
        </div>

        <div class="submit button mt-5 ms-5 ">
          <button type="button" class="btn btn-warning">
            SUBMIT
          </button>
        </div>
      </div> */}

      <div className="container-fluid contact" data-aos="fade-down-right">
        <h1>
          HAVE QUESTIONS?<br></br>CONTACT US
        </h1>

        <div class="container-fluid contactcontainer">
          <div class="left" data-aos="flip-left">
            <input
              type="text"
              class="text-field"
              placeholder="Full Name"
              name="fullname"
              onChange={contactchange}
            />
            <input
              type="text"
              class="text-field"
              placeholder="Email Id"
              name="emailid"
              onChange={contactchange}
            />
          </div>
          <div class="right" data-aos="flip-left">
            <input
              type="text"
              class="text-field3"
              placeholder="Your Message"
              name="yourmessage"
              onChange={contactchange}
            />
          </div>
          </div>

        <div className="check">
          <input type="checkbox"></input>

          <span className="words">
            By using this form you agree with the storage and handling of
            <br></br> your data by this website.
          </span>
          <div className="contactbut">
            <button className="submitbut">Submit</button>
          </div>
        </div>

      </div>
    </>
  );
}
