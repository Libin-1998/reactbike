import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <>
    <div class="container-fluid contact mt-5">
        <div class="heading">
        <h1 class="space"><b>HAVE QUESTIONS?<br></br>CONTACT US</b></h1>
      </div>

      <div class="row m-5">
        <div class="col-2 me-4">
          <input type=""placeholder='Full Name' class="nameheight"></input>
          <div class="row-2 mt-3">
          <input type=""placeholder='Email' class="emailheight"></input>
          </div>
        </div>
        <div class="col-2">
        <input type=""placeholder='Your Message' class="messageheight"></input>
        </div>

      </div>

<div class="check">
    <input type="checkbox" class="form-check-input"></input>
    <label class="ms-2">By using this form you agree with the storage and handling of <br></br> your data by this website.</label>
</div>

<div class="submit button mt-5 ms-5 " >
  <button type="button" class="btn btn-warning">SUBMIT</button>
</div>
</div>

    </>
  )
}
