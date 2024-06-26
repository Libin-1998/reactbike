import React from "react";
import "./Volunteers.css";

export default function Volunteers() {
  return (
    <>
      {/* <div class="container-fluid mt-5 volunteer">
    <h1 class="vol text-warning"><b>WE ARE LOOKING FOR <br></br> VOLUNTEERS</b></h1>
<button type="button" class="btn btns  btn-success">JOIN THE TEAM</button>
</div>

<div class="container-fluid bgcolour justify-content-between">
  <div class="row align-items-start p-5">
    <div class="col-4 m-4">
      <h1 class="text-white">345,568</h1>
      <p><b>PARTICIPANTS</b></p>
      <h1 class="text-white">350</h1>
      <p><b>VOLUNTEERS</b></p>
      <h1 class="text-white">582</h1>
      <p><b>DETAILS</b></p>
    </div>
    <div class="col-6 m-4 bg-dark text-warning p-4">
      <h1>Participents'<br></br>reviews</h1>
      <div class="row">
        <div class="col-3">
      <img src={'./img/andrew-black-La.jpg'}class="image mt-2" height={'80px'}width={'90px'} ></img></div>
      <div class="col">
      <p class="words opacity-50 text-light">Thankyou for leting me be a part of such a fantastic <br></br>event!Being a volunteer for this race is much more<br></br>than just work,it's an unforgettable experirnce that will<br></br>stay with me for the rest of my life.</p>
      </div>
      </div>
      <h6 class="rider">peter welsh AK</h6>
    </div>
  </div>
</div> */}



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
