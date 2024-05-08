import React from 'react'
import "./Volunteers.css"

export default function Volunteers() {
  return (
    <>

<div class="volunteer">
    <h1 class="vol text-warning"><b>WE ARE LOOKING FOR <br></br> VOLUNTEERS</b></h1>
<button type="button" class="btn btn-success">JOIN THE TEAM</button>
</div>

<div class="container-fluid colour justify-content-between">
  <div class="row align-items-start p-5">
    <div class="col-4 m-4">
      <h1>345,568</h1>
      <p>PARTICIPANTS</p>
      <h1>350</h1>
      <p>VOLUNTEERS</p>
      <h1>582</h1>
      <p>DETAILS</p>
    </div>
    <div class="col-6 m-4 bg-dark text-warning p-4">
      <h1>Participents'<br></br>reviews</h1>
      <p class="words opacity-50 text-light">Thankyou for leting me be a part of such a fantastic <br></br>event!Being a volunteer for this race is much more<br></br>than just work,it's an unforgettable experirnce that will<br></br>stay with me for the rest of my life.</p>
      <h6 class="rider">peter welsh AK</h6>
    </div>
  </div>
</div>

      
    </>
  )
}
