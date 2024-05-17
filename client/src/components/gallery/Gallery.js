import React from 'react';
import "./Gallery.css";

export default function Gallery() {
  return (
    <>

    {/* <div class="container d-flex justify-content-between mt-5 mb-5">
     <h1 class="text-warning"> <b> visit our gallery</b></h1>
     <button class="me-1 bg-warning border text-white"><h6 class="pe-2 ps-2">VISIT GALLERY</h6></button>
    </div>
    
<div class="container gallery">
  <div class="row ">
    <div class="col-4 ">
        <img src={"./img/gallery-3.jpg"}width={'352px'} height={'200px'}></img>
    </div>
    <div class="col-4 ">
        <img src={"./img/gallery-2.jpg"}width={'352px'}height={'200px'}></img>
    </div>
    <div class="col-4 ">
    <img src={"./img/gallery-1-.jpg"}width={'352px'}height={'200px'}></img>
    </div></div>
    <div class="row mt-4">
    <div class="col-6 ">
    <img src={"./img/blog1-.jpg"}width={'544px'}height={'250px'}></img>
    </div>
    <div class="col-6 ">       
    <img src={"./img/blog.jpg"}width={'544px'}height={'250px'}></img>
</div>
</div>
  </div>

  <div class="container mb-4">
    <div class="row mt-5">
      <div class="col mt-5">
      <h6><b>RACE ROUT</b></h6>
      <h1 class="text-warning">about the<br></br>area</h1>
      <p>We would like to introduce one of the tracks that will <br></br>be available for the race in High Village Park. It’s<br></br> twenty miles of hard-to-reach forests, rocky cliffs and<br></br> mountain rivers. In 2018, this route was recognized<br></br> as one of the hardest in North America. All athletes<br></br> must meet all the requirements of the Event’s<br></br> sanctioning body (e.g., including but not limited to <br></br>the sanctioning body’s licensing and/or insurance<br></br>requirements).</p>
      </div>
      <div class="col mt-4">
        <img src={'./img/race_map2.jpg'}></img>
        <div class="end bg-dark text-white p-5">Corredo Race 2019 rout</div>
      </div>
    </div>
    


  </div> */}


<div className='container visitgallery'>
  <h2><b>Visit Our Gallery</b></h2>
  <button className='visitgallerybut'>VISIT GALLERY</button>
  </div>

<div className='container gallerys'>
<div className='firstrow'>
    <div className='imgfirst'>
    <img src={"./img/gallery1.jpg"}height={"200px"} width={"362px"}></img>
    </div>

    <div className=' imgsecond'>
    <img src={"./img/gallery2.jpg"}height={"200px"} width={"362px"}></img>
    </div>

    <div className=' imgthree'>
    <img src={"./img/gallery3.jpg"}height={"200px"} width={"362px"}></img>
    </div>
    </div>

    <div className='secondrow'>
    <div className='imgfour '>
    <img src={"./img/gallery4.jpg"}height={"250px"} width={"548px"}></img>
    </div>    

    <div className='imgfive'>
    <img src={"./img/gallery5.jpg"}height={"250px"} width={"548px"}></img>
    </div>
    </div>
    </div>
    
    </>
  )
}
