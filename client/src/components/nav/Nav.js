import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const logged = localStorage.getItem("isLoggedIn");
  console.log(logged);

  const removed=()=>{
    localStorage.removeItem('isLoggedIn')
  }



  return (
    <>
      <div className="container navtop">
        <ul class="nav justify-content-center mt-5">
          <li class="nav-item">
            <Link to={"/"}>
              <a class="nav-link home " href="#">
                <b> HOME</b>
              </a>
            </Link>
          </li>
          {/* <li class="nav-item">
          <Link to={"/blog"}>
          <a class="nav-link home" href="#">
            <b>BLOG</b>
          </a>
          </Link>
        </li> */}
          {/* <li class="nav-item">
          <Link to={'/join'}>
          <a class="nav-link home" href="#">
            <b>JOIN</b>
          </a>
          </Link>
        </li> */}
          {/* <li class="nav-item">
            <Link to={"/gallery"}>
              <a class="nav-link home" href="#">
                <b>GALLERY</b>
              </a>
            </Link>
          </li> */}
          <li class="nav-item">
            <Link to={"/newvolunteer"}>
              <a class="nav-link home" href="#">
                <b>VOLUNTEERS</b>
              </a>
            </Link>
          </li>
          {/* <li class="nav-item">
          <Link to={'/sections'}>
          <a class="nav-link home" href="#">
            <b>SECTIONS</b>
          </a>
          </Link>
        </li> */}
          <li class="nav-item">
            <Link to={"/contact"}>
              <a class="nav-link home" href="#">
                <b>CONTACTS</b>
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

          {/* <li class="nav-item">
              <Link to={'/counter'}>
              <a class="nav-link home" href="">
                <b>COUNTER</b>
              </a>
              </Link>
        </li> */}

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
          {logged == "true" ? (
            <>
              <li class="nav-item">
                <a class="nav-link home" href="">
                  <b>PROFILE</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link logout" href="" onClick={removed}>
                  <b>LOGOUT</b>
              
                </a>
              </li>

            </>
          ) : (
            <>
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


