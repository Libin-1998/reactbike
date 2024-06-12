import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate=useNavigate()
  
  const [input, setinput] = useState({
    name:'',
    password:'',
  });

const inputchange=(event)=>{

  const name =event.target.name;
  const value=event.target.value;
  setinput({...input,[name]:value})

}
  console.log(input);

  const loginsubmit=(event)=>{
    event.preventDefault()
    axios.post('http://localhost:8000/api/logs/login',input)
    .then((response)=>{
      // console.log(response);
      console.log(response.data.message);
      toast.success(response.data.message)
      localStorage.setItem('isLoggedIn',true)

      setTimeout(() => {
        navigate('/')
        window.location.reload()
      }, 2000);

    })
    .catch((error)=>{
      // console.log(error);
      console.log(error.response.data.message);
      toast.error(error.response.data.message)
    })
  }


  return (
    <>
 <div class="container-fluid loginbgimage">
  <ToastContainer/>
        <div class="row">
          <div class="col-4"></div>
          <div class="col-4 mt-5 mb-5">
            <img src={"./img/logo.png"} class="img-fluid"></img>

            <form class="mt-3">
              <div class="mb-3">
                <label for="" class="form-label">
                  Name
                </label>
                <input type="text" name="name" onChange={inputchange} class="form-control" />

                <label for="inputPassword5" class="form-label">
                  Password
                </label>
                <input type="password" name="password" onChange={inputchange} class="form-control" />
              </div>

              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" onClick={loginsubmit}>
                  Login
                </button>
              </div>

              <a href="" className="text-dark">
                <h6 class="mt-2">Forgotten password?</h6>
              </a>
              <p class="text-center">OR</p>

              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">
                 <span className="fbspan"><img src="./img/fbicon.png" class="fb"></img></span>Login With
                  Facebook
                </button>
                <button class="btn btn-primary" type="button">
                <span className="googlespan"><img src="./img/googleicon.png" class="google"></img></span>Login
                  With Google
                </button>
              </div>
            </form>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
    </>
  );
}
