import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      <div class="container-fluid ps-5 ms-5">
        <h6 class="blog">FROM THE BLOG</h6>
        <h1 class="news">News feed</h1>

      <div class="row mt-5">

        <div class="col-6">
          <img src={"./img/blog1-.jpg"}height={"250px"}width={"460px"}></img>
          <div class="mt-3"><span class="bg-warning pe-1 ps-1"> june 18.18</span></div>
          <h3>How to Create a Family Race-<br></br>Cation</h3>
      <p class="opacity-75">Heading to a race doesn’t have to be a solo excursion. Read our<br></br>    tips for keeping the family in tow, without sacrificing your race goals.</p>
      </div>

<div class="col-6">
  <div class="row">
  <div class="col-5">
    <img src={"./img/blog.jpg"}height={"200px"} width={"200px"}></img>
  </div>
  <div class="col-5"><span class="bg-warning pe-1 ps-1">jun 18.18</span>
  <p>6 Dirt Bikes That <br></br>Changed The<br></br>Sport</p>
  </div>


  </div>

</div>
      </div>

      </div>
      
  
    </>
  );
}
