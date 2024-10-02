import React from "react";
import "./Blog.css";

export default function Blog() {
  return (
    <>

<div className="container-fluid blogstart">
  <div className="bloghead">
  <h5 className="">FROM THE BLOG</h5>
  <h1 className="bgnewsfeed">news feed</h1>
  </div>

<div className="news">
  <div className="column">
  <img src={"./img/blog1-.jpg"} className="blogimg"></img>
            <div className="sub">
              <span className="btitle">JUN 18.18</span> by Ashely|5 comments
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
    <div className="comments" data-aos="fade-left">
      <div className="commentspace">
      <img src="/img/gallery-2.jpg" className="columnimage"width={"190px"} height={"170px"}></img>
      </div>
      <div className="">
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

    <div className="comments" data-aos="fade-right">
      <div className="commentspace">
      <img src="/img/gallery-2.jpg" className="columnimage"width={"190px"} height={"170px"}></img>
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
