import React, { useState } from 'react'
import './Addspare.css'
import axios from 'axios'
import  { toast,ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export default function Addspare() {

  const navigate=useNavigate()

  const[data,Setdata]=useState({})

  const Datachange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    Setdata({...data,[name]:value})
  }
  console.log(data);

  const imageChange=(event)=>{
    Setdata({...data,image:event.target.files[0]})
    console.log(data.image);
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    const formdata= new FormData()
    formdata.append('pardsname',data.pardsname)
    formdata.append('pardscode',data.pardscode)
    formdata.append('price',data.price)
    formdata.append('company',data.company)
    formdata.append('image',data.image)



axios.post('http://localhost:8000/api/spare/add-product',formdata)
.then((response)=>{
  console.log(response);
  toast.success(response.data.message)
  setTimeout(() => {
    navigate('/spareparts')
  }, 2000);
})
.catch((error)=>{
  console.log(error);
})

  }


  return (
    <>

    <div className='addsparepage'>
      <ToastContainer/>
        <div className='addspareclass'>
    <h1 className='sparehead'>ADD SPARE PARTS</h1>
<form onSubmit={handleSubmit} encType='multipart/form-data'>
            <label htmlFor="">pardsname</label><br />
            <input type="text" className='addspareinput' onChange={Datachange} name='pardsname'/><br /><br />

            <label htmlFor="">pardscode</label><br />
            <input type="text" className='addspareinput' onChange={Datachange} name='pardscode'/><br /><br />

            <label htmlFor="">price</label><br />
            <input type="text" className='addspareinput' onChange={Datachange} name='price'/><br /><br />

            <label htmlFor="">company</label><br />
            <input type="text" className='addspareinput' onChange={Datachange} name='company'/><br /><br />

            <label htmlFor="">Image</label><br />
            <input type="file" className='addspareinput' onChange={imageChange} name='image'/><br /><br />

<div className='addsparesubmit'>
<button className='addsubmit' type='submit'>Submit</button>
</div>
</form>
        </div>

    </div>
      
    </>
  )
}
