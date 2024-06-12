import React from "react";
import "./Gallery.css";

export default function Gallery() {
  return (
    <>
      <div className="container-fluid galleryhead">
        <div className="container visithead">
          <h2 className="">
            <b>Visit Our Gallery</b>
          </h2>
          <button className="visitgallerybutton">VISIT GALLERY</button>
        </div>
        <div className="galleryimg">
          <img className="firstimg" src={"./img/gallery1.jpg"}></img>

          <img className="secondimg" src={"./img/gallery2.jpg"}></img>

          <img className="thirdimg" src={"./img/gallery3.jpg"}></img>

          <img className="fourthimg" src={"./img/gallery4.jpg"}></img>

          <img className="fifthimg" src={"./img/gallery5.jpg"}></img>
        </div>
      </div>
    </>
  );
}
