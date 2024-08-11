import React from "react";
import "./Volunteers.css";

export default function Volunteers() {
  return (
    <>
    
      <div className="container volstart">
        <div className="container-fluid volunteerbg"data-aos="fade-down-right">
          <h1 className="">
            WE ARE LOOKING FOR <br></br>VOLUNTEERS!
          </h1>
          <button className="buttonbg">JOIN THE TEAM</button>
        </div>

        <div className="participants">
          <div  className="column" data-aos="zoom-in-right">
            <h1  className="nums">345,568</h1>
            <p>
              <b>PARTICIPENTS</b>
            </p>

            <h1 className="nums">350</h1>
            <p>
              <b>VOLUNTEERS</b>
            </p>

            <h1 className="nums">582</h1>
            <p>
              <b>DETAILS</b>
            </p>
          </div>
          <div className="partcolumn" data-aos="zoom-out-right">
            <h1 className="headspace">
              Participants'<br></br>reviews
            </h1>
            <div className="reviews">
              <div className="column">
                <img
                  src={"./img/andrew-black-La.jpg"}
                  className="peterimage"
                ></img>
              </div>
              <div className="peterimgcolumn">
                <p class="reviewcolor">
                  Thankyou for leting me be a part of such a fantastic <br></br>
                  event!Being a volunteer for this race is much more
                  <br></br>than just work,it's an unforgettable experirnce that
                  will<br></br>stay with me for the rest of my life.
                </p>
                <span className="ridernamecolor">peter welsh k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
