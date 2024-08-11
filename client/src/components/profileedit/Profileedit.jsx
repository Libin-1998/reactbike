import React, { useEffect, useState } from 'react'
import './Profileedit.css'
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import axios from 'axios';



export default function Profileedit() {

    const {id}=useParams()

    const [item,Setitem]=useState({})

    useEffect(()=>{
axios.get(`http://localhost:8000/api/reg/viewsingle/${id}`)
.then((response)=>{
    console.log(response); 
    Setitem(response.data.data)
})
.catch((error)=>{
    console.log(error);
    
})
    },[])




  return (

    <>
    <div className='profileditpage'>
<div  className='pro'>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label style={{fontWeight:'bold'}}>Name</Form.Label>
        <Form.Control type="text"  value={item.name}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label style={{fontWeight:'bold'}}>Email Address</Form.Label>
        <Form.Control type="email"  value={item.email}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label style={{fontWeight:'bold'}}>Phone</Form.Label>
        <Form.Control type="text" value={item.phone} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label style={{fontWeight:'bold'}}>Dob</Form.Label>
        <Form.Control type="date" value={item.dob} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label style={{fontWeight:'bold'}}>Gender</Form.Label>
        <Form.Control type="text" value={item.gender} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label style={{fontWeight:'bold'}}>City</Form.Label>
        <Form.Control type="text" value={item.city} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label style={{fontWeight:'bold'}}>State</Form.Label>
        <Form.Control type="text" value={item.state} />
      </Form.Group>

      <button>Update</button>
     
    </Form>
    </div>
    </div>
    </>
  )
}

