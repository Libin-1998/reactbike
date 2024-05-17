import React from 'react'
import "./Htmlcss.css"

export default function Html() {
  return (
    <>
    <div className="start">
        <h1>Heading</h1>
      </div>
      <div className="cont">
        <div className="media" style={{backgroundColor:'green'}}><h3>First Heading</h3>
        <p className='end'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi, blanditiis reiciendis minus id perspiciatis earum animi repudiandae libero, amet commodi est dolore sapiente incidunt nostrum architecto quaerat! Eaque accusamus est ducimus voluptatibus commodi rem numquam doloremque natus, voluptates esse. Ab perspiciatis perferendis itaque. Reprehenderit.</p>
        </div>
        <div class="query"style={{backgroundColor:'orange'}}><h3>Second Heading</h3>
        <p className="end">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dolores nulla earum quia aut beatae enim tempora alias. Tenetur enim quasi dolorem aperiam quibusdam ducimus ipsa assumenda. Perferendis, vitae ut tempore placeat beatae amet maxime similique fugit, pariatur illum totam ad, exercitationem iusto! Eius, quisquam?</p>
        </div>
      </div>
    </>
  )
}
