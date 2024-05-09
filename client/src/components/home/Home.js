import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <>
    <div class="cont text-warning">
      <h1 class="head"><b>CORREDO RACE <br></br> 2023</b></h1>

      <div id="countdown">
    <div id="timer">
      <div>
        <span id="days">0</span>
        <span>Days</span>
      </div>
      <div>
        <span id="hours">0</span>
        <span>Hours</span>
      </div>
      <div>
        <span id="minutes">0</span>
        <span>Minutes</span>
      </div>
      <div>
        <span id="seconds">0</span>
        <span>Seconds</span>
      </div>
    </div>
  </div>

      <div class="text-center mt-5 ">
      <button type="button" class="btn btn-warning text-white">VIEW MORE</button></div>
      </div>
      

      <div class="container-fluid pt-5 pb-5 justify-content-center">
  <div class="row text-center">
    <div class="col">
      <h3>Race <br></br> Information</h3>
      <div> <b>Details</b></div>
    </div>
    <div class="col">
    <h3>i'm A First <br></br> Timer!</h3>
    <div><b>Details</b></div>
    </div>

    <div class="col">
    <h3>About The <br></br> Area</h3>
    <div><b>Details</b></div>
    </div>

    <div class="col">
    <h3>Become a <br></br> Volunteer</h3>
    <div><b>Details</b></div>
    </div>
  </div>
</div>
      

      
      

     
      
    </>
  )
}
