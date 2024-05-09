import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <>
    <div class="container-fluid contact">
        <div class="header">
        <h1><b>HAVE QUESTIONS?<br></br>CONTACT US</b></h1>
      </div>

  <div class="row row-cols-2">
    <div class="col-2 ms-5">
      <input type="text"placeholder='fullname'></input>
    </div>
    <div class="col ms-3">
    <input type="text" placeholder='Email'></input>

    </div>
    <div class="col ms-5 mt-2">
    <input type="text" placeholder='Message'></input>

    </div>
  </div>

<div class="check">
    <input type="checkbox" class="form-check-input"></input>
    <label class="ms-2">By using this form you agree with the storage and handling of <br></br> your data by this website.</label>
</div>

<div class="submit button mt-5 ms-5" >
  <button type="button" class="btn btn-warning">SUBMIT</button>
</div>

</div>



    </>
  )
}
