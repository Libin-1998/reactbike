import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      <div class="container mt-5">
        <h6 class="blog">FROM THE BLOG</h6>
        <h1 class="news">News feed</h1>

       <div class="row mt-5 ">

          <div class="col-6">
          <img src={"./img/blog1-.jpg"}height={"250px"}width={"400px"}></img>
          <div class="mt-3"><span class="bg-warning pe-1 ps-1"> june 18.18</span></div>
          <h3>How to Create a Family Race-<br></br>Cation</h3>
         <p class="opacity-75">Heading to a race doesn’t have to be a solo excursion. Read our<br></br>    tips for keeping the family in tow, without sacrificing your race goals.</p>
         </div>

          <div class="col-5">
           <div class="row p-3 cover">
            <div class="col-7 p-2">
            <img src={'./img/blog.jpg'}height={'180px'} width={'220px'}></img>
             </div>
              <div class="col-4 p-2">
              <h6><span class="bg-warning pe-1 ps-1">jun 18.18</span></h6>
              <h6>6 Dirt Bikes That<br></br>Changed the <br></br>Sport</h6>
              <br></br>
              <h6> by Ashley|<br></br>0 Comments</h6>
             </div>
             </div>


             <div class="row p-3 cover mt-3">
             <div class="col-7 p-2">
            <img src={'./img/gallery-2.jpg'}height={'180px'} width={'200px'}></img>
             </div>
              <div class="col-4 p-2">
              <h6><span class="bg-warning pe-1 ps-1">jun 05.18</span></h6>
              <h6>6 Things We<br></br>Learned at the<br></br>MXGP of France</h6>
<br></br>
<h6> by Ashley|<br></br>0 Comments</h6>
             </div>
             </div>
           </div>

        </div>
      </div>
      
  
    </>
  );
}
