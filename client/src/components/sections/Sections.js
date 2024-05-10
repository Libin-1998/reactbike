import React from "react";
import "./Sections.css"

export default function Sections() {
  return (
    <>
      <div class="container mt-4 ms-5">
        <div class="row">
          <div class="col-lg-6 col-sm-6 text-secondary">
            <b>ENTRY FEES</b>
            <h1 class="fees text-success">
              entry fee <br></br> option
            </h1>
            <p>
              {" "}
              Welcome to Corredo! We are one of the biggest moto- <br></br>{" "}
              families in the world. And we have extensive<br></br> experience
              in organizing all sorts of races, including <br></br> road racing
              and off-road racing, both on circuits and <br></br> open courses,
              and track racing. Our races include <br></br>events for motocross,
              off-road, enduro, trials, cross- <br></br> country, and more. If
              you are ready to test yourself<br></br> on the longest and hardest
              tracks against the world’s<br></br> top athletes, feel free to
              contact us!
            </p>
          </div>
          <div class="col-lg-2 m-1 col-sm-4 pt-3 bg-warning text-center">
            <h2>$75</h2>
            <h5>FULL PACK REGISTRATION</h5><hr/>
            <h6>Storage camera <br></br> Changing room<br></br>
              Medal<br></br>
              Event t-shirt 
              <br></br>Insurance
            </h6>
            <div class="button p-3">
              <button type="button" class="btn btn-success">
                ENTER NOW
              </button>
            </div>
          </div>
          <div class="col-lg-2 m-1 col-sm-4  text-center pt-3 bg-warning">
            <h2>$55</h2>
            <h5>FULL PACK REGISTRATION</h5><hr/>
            <h6>
              Storage camera <br></br>Chinging room<br></br>Medal<br></br>-
              <br></br>-
            </h6>

            <button type="button" class="btn btn-success mt-3">
              ENTER NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
