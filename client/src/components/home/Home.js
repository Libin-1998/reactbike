import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <>
    
<div className='container-fluid starting'>
<h1 className='heading' data-aos="fade-up-left">CORREDO RACE<br></br>2023</h1>

<div id="countdown">
    <div id="timer" data-aos="fade-down-right">
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


<div className='container-fluid class'>
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
