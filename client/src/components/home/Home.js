import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <>
    {/* <div class="container-fluid homehead ">
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
</div> */}


<div className='starting'>
<h1 className='heading'>CORREDO RACE<br></br>2023</h1>

<div id="countdown">
    <div id="timer">
      <div>
        <span id="days" className='font'>0</span>
        <span className='font'>Days</span>
      </div>
      <div >
        <span id="hours" className='font'>0</span>
        <span className='font'>Hours</span>
      </div>
      <div>
        <span id="minutes" className='font'>0</span>
        <span className='font'>Minutes</span>
      </div>
      <div>
        <span id="seconds" className='font'>0</span>
        <span className='font'>Seconds</span>
      </div>
    </div>
  </div>
  <div className='viewmorebut'>
  <button className='viewbutton'>VIEW MORE</button>
  </div>
</div>


<div className='container class'>
  <div className='onerow'>
    <div className='column-1'><h3>Race <br></br> Information</h3>
    <p><b>Details</b></p>
   </div>

   <div className='column-2'><h3>i'm A First <br></br> Timer!</h3>
    <p><b>Details</b></p>
    </div>

    <div className='column-3'>
    <h3>About The <br></br> Area</h3>
    <p><b>Details</b></p>
    </div>

<div className='column-4'>
<h3>Become a <br></br> Volunteer</h3>
<p><b>Details</b></p>
</div>
  </div>
</div> 
 
      
    </>
  )
}
