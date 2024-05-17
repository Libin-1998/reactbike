import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <ul class="nav justify-content-center mt-5">
        <li class="nav-item">
          <Link to={"/"}> 
          <a class="nav-link home " href="#">
            <b> HOME</b>
          </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/blog"}>
          <a class="nav-link home" href="#">
            <b>BLOG</b>
          </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={'/join'}>
          <a class="nav-link home" href="#">
            <b>JOIN</b>
          </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={'/gallery'}>
          <a class="nav-link home" href="#">
            <b>GALLERY</b>
          </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={'/volunteers'}>
          <a class="nav-link home" href="#">
            <b>VOLUNTEERS</b>
          </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={'/sections'}>
          <a class="nav-link home" href="#">
            <b>SECTIONS</b>
          </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={'/contact'}>
          <a class="nav-link home" href="#">
            <b>CONTACTS</b>
          </a>
          </Link>
        </li>
      </ul>
    </>
  );
}
