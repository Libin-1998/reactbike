import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const logged = sessionStorage.getItem("isLoggedIn");
  console.log(logged);
  console.log(typeof logged);

  const removed=()=>{
    sessionStorage.clear('isLoggedIn')
  }

  const roles=sessionStorage.getItem('role')



  return (
    <>

      <div className="container-fluid navtop">
        <ul class="nav justify-content-center">

          {logged == "true" ? (
            <>
<li class="nav-item">
            <Link to={"/"}>
              <a class="nav-link home " href="#">
                <b> HOME</b>
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to={"/newvolunteer"}>
              <a class="nav-link home" href="#">
                <b>VOLUNTEERS</b>
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to={"/events"}>
              <a class="nav-link home" href="">
                <b>EVENTS</b>
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to={"/spareparts"}>
              <a class="nav-link home" href="">
                <b>SPARE PARTS</b>
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to={"/carts"}>
              <a class="nav-link home" href="">
                <b>CARTS</b>
              </a>
            </Link>
          </li>
            

    {roles=='admin' ?(<>
          
          <li class="nav-item">
      <Link to={"/addspare"}>
        <a class="nav-link home" href="">
          <b>ADD SPARE</b>
        </a>
      </Link>
    </li>

    <li class="nav-item">
      <Link to={"/addevents"}>
        <a class="nav-link home" href="">
          <b>ADD EVENTS</b>
        </a>
      </Link>
    </li>

    <li class="nav-item">
      <Link to={"/volform"}>
        <a class="nav-link home" href="">
          <b>ADD VOLUNTEERS</b>
        </a>
      </Link>
    </li>
  

  </>):('')}

  <li class="nav-item">
                <a class="nav-link home" href="/profile">
                  <b>PROFILE</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link logout" href="/" onClick={removed}>
                  <b>LOGOUT</b>
              
                </a>
              </li>

 </>


          ) : (
            <>

             <li class="nav-item">
            <Link to={"/"}>
              <a class="nav-link home " href="#">
                <b> HOME</b>
              </a>
            </Link>
          </li>
       
          <li class="nav-item">
            <Link to={"/spareparts"}>
              <a class="nav-link home" href="">
                <b>SPARE PARTS</b>
              </a>
            </Link>
          </li>

       
        
          <li class="nav-item">
            <Link to={"/newvolunteer"}>
              <a class="nav-link home" href="#">
                <b>VOLUNTEERS</b>
              </a>
            </Link>
          </li>
      
          {/* <li class="nav-item">
            <Link to={"/contact"}>
              <a class="nav-link home" href="#">
                <b>CONTACTS</b>
              </a>
            </Link>
          </li> */}

          <li class="nav-item">
            <Link to={"/events"}>
              <a class="nav-link home" href="">
                <b>EVENTS</b>
              </a>
            </Link>
          </li>

            <li class="nav-item">
            <Link to={"/register"}>
              <a class="nav-link home" href="">
                <b>REGISTER</b>
              </a>
            </Link>
          </li>

          <li class="nav-item">
            <Link to={"/login"}>
              <a class="nav-link home" href="">
                <b>LOGIN</b>
              </a>
            </Link>
          </li>

          
          </>
          )}


        </ul>
      </div>
    </>
  );
}


