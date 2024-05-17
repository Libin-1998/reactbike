import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      {/* <div class="container mt-5">
        <h6 class="blog">FROM THE BLOG</h6>
        <h1 class="news">News feed</h1>

       <div class="row mt-5 ">

          <div class="col-6 media">
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
      </div> */}

      <div className="container">
        <h6>
          <b>FROM THE BLOG</b>
        </h6>
        <h1>
          <b>news feed</b>
        </h1>

        <div className="row">
          <div className="column">
            <img src={"./img/blog1-.jpg"} className="blogimg"></img>
            <div className="sub">
              <span className="title">JUN 18.18</span> by Ashely|5 comments
            </div>
            <h3 className="secondhead">
              How to Create a Family Race-<br></br>Cation
            </h3>
            <p>
              Heading to a race doesn’t have to be a solo excursion. Read our
              <br></br> tips for keeping the family in tow, without sacrificing
              your race goals.
            </p>
          </div>
          <div className="column">
            <div className="row blogsecond">
              <div className="column">
                <img src="./img/blog.jpg" className="colimage"></img>
              </div>
              <div className="column">
                <span className="date">JUN 18.18</span>
                <p>
                  6 Dirt Bikes That<br></br>Changed the <br></br>Sport
                </p>
                <p>
                  {" "}
                  by Ashley|<br></br>0 Comments
                </p>
              </div>
            </div>

            <div className="row blogsecond">
              <div className="column">
                <img src="/img/gallery-2.jpg" className="colimage"></img>
              </div>
              <div className="column">
                <span className="date">JUN 05.18</span>
                <p>
                  6 Things WE<br></br>Learned at the <br></br>MXGP of France
                </p>
                <p>
                  {" "}
                  by Ashley|<br></br>0 Comments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
