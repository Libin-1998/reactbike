import React, { useEffect, useState } from 'react'
import './Spareparts.css'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Spareparts() {

  const userid=sessionStorage.getItem('userlogid')
  console.log(userid);
  
  const navigate=useNavigate()
  const [viewdata,Setviewdata]=useState([])


  useEffect(()=>{
axios.get('http://localhost:8000/api/spare/viewdata')
.then((response)=>{
  console.log((response.data.message));
  Setviewdata(response.data.data)


})
.catch((error)=>{
  console.log(error);
})
  },[])


  const cartButton=(id)=>{
    console.log(id);
    axios.post(`http://localhost:8000/api/carts/add-cart/${userid}/${id}`,viewdata)
    .then((response)=>{
      console.log(response.data.message); 

      navigate('/carts')
    })
    .catch((error)=>{
      console.log(error);
    })

  }



  return (
    <>
    <div className='sparepage'>

{viewdata.map((datas)=>(<>

    <div class="sparecard">
      
      <div class="spareimg">
        <img src={`/img/${datas.image}`} alt="" style={{height:"100%",width:'100%'}} />
        </div>

      <div class="sparetext">
        <p class="spareh3">{datas.pardsname}</p>
        <p class="sparep">{datas.company}</p> 
        <p class="sparep">{datas.price}</p> 
        
          <button class="sparebutton" onClick={()=>cartButton(datas._id)}>Add To Cart</button>
      </div>
    </div>
</>))}

    </div>
      
    </>
  )
}
