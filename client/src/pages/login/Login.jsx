import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <>
      {/* <div class="container backg">
<div class="row ">
        <div class="col align-self-center pt-5">
            <img src={"./img/logo.png"} class="img"></img>
            <form class="mt-4">
                <label for=""><h5>Name</h5></label><br></br>
                <input type="text" class="usernamewidth"></input><br></br>
             
                <label for=""><h5>Password</h5></label><br></br>
                <input type="password" class="passwordwidth mb-5"></input><br></br>

                <button type="button" class="btnlg btn btn-primary btn-sm btn-block">Login</button>
                <h6>Forgot password?</h6>

                <div class="text-center">
                   <h5>OR</h5>
                </div>

                <div class="mb-3">
                <button type="button" class="btnlg btn btn-primary btn-sm">
                <span class="fbicon"> <img src="./img/fbicon.png" class="fb"></img></span>Login With Facebook</button>
                </div>
            
                <button type="button" class="btnlg btn btn-primary btn-sm mb-5">
                 <span class=""><img src="./img/googleicon.png" class="google"></img></span>Login With Google</button>

            </form>
        



        </div>
        </div>
      </div> */}


<div class="container-fluid bgimage">
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4 mt-5 mb-5">
<img src={"./img/logo.png"} class="img-fluid"></img>

<form class="mt-3">

<div class="mb-3">
  <label for="" class="form-label">Name</label>
  <input type="text" class="form-control"/>

 <label for="inputPassword5" class="form-label">Password</label>
  <input type="password" class="form-control"/>
</div>

<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Login</button>
</div>

<h6 class="mt-2">Forgotten password?</h6>
<p class="text-center">OR</p>

<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button"><img src="./img/fbicon.png" class="fb"></img>Login With Facebook</button>
  <button class="btn btn-primary" type="button"><img src="./img/googleicon.png" class="google"></img>Login With Google</button>
</div>
    </form>
  </div>
  <div class="col-4"></div>


</div>
</div>










    </>
  )
}
