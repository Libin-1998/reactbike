import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <ul class="nav justify-content-center mt-5">
        <li class="nav-item">
          <a class="nav-link home " href="#">
            <b> HOME</b>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link home" href="#">
            <b>ABOUT THE RACE</b>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link home" href="#">
            <b>RESULTS</b>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link home" href="#">
            <b>GALLERY</b>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link home" href="#">
            <b>VIDEOS</b>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link home" href="#">
            <b>FEATURES</b>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link home" href="#">
            <b>CONTACTS</b>
          </a>
        </li>
      </ul>
    </>
  );
}
