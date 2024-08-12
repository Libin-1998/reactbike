import React, { useEffect, useState } from 'react'
import './Cart.css'
import axios from 'axios'
import { IoTrash } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function Cart() {

  const[data,Setdata]=useState([])
  const [totalPrice, setTotalPrice] = useState(0);


const userid=sessionStorage.getItem('userlogid') 

 useEffect(()=>{
axios.get(`http://localhost:8000/api/carts/view-carts/${userid}`)
.then((response)=>{
  console.log(response);
  Setdata(response.data.data)
})
.catch((error)=>{
  console.log(error);
})
 },[])


 useEffect(() => {
  const calculateTotalPrice = () => {
    const total = data.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);
    setTotalPrice(total);
  };

  calculateTotalPrice();
}, [data])



 const decrementButton=(id,quantity)=>{
  console.log(quantity);
  if(quantity<=1){
    window.location.reload()
  }
  // if(quantity!==1){
    axios.get(`http://localhost:8000/api/carts/decrement/${id}`)
    .then((response)=>{
      console.log(response);
      Setdata((prevData) =>
        prevData.map((data) =>
          data._id === id ? { ...data, quantity: data.quantity - 1 } : data
        )
      );
    })
    .catch((error)=>{
      console.log(error);
  
    })
  // }


 }

  const incrementButton=(id)=>{
    axios.get(`http://localhost:8000/api/carts/increment/${id}`)
    .then((response)=>{
      console.log(response);
      Setdata((prevData) =>
        prevData.map((data) =>
          data._id === id ? { ...data, quantity: data.quantity + 1 } : data
        )
      );
    })
    .catch((error)=>{
      console.log(error);
  
    })
   }

   const TrashClick=(id)=>{
axios.delete(`http://localhost:8000/api/carts/delete/${id}`)
.then((response)=>{
  console.log(response);
  // window.location.reload()
  Setdata(data.filter(datas => datas._id !== id));
})
.catch((error)=>{
  console.log(error);
})
   }


  return (
    <>

    <div className='cartpage'>

    <div class="master-container">
  <div class="card cart">
    <label class="title">Your cart</label>
    <div class="products">

    {data.map((datas)=>(
      <>

      <div class="product">
 
<img src={`/img/${datas.productId.image}`} alt="" height={'65px'} width={'65px'}/>

        <div>
          <span>{datas.productId.pardsname}</span>
          <p>{datas.productId.company}</p>
          <p>{datas.productId.pardscode}</p>
        </div>
        <div class="quantity">
          <button onClick={()=>decrementButton(datas._id,datas.quantity)}>

            <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M20 12L4 12"></path>
            </svg>
          </button>
          <label>{datas.quantity}</label>
          <button onClick={()=>incrementButton(datas._id)}>
            <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M12 4V20M20 12H4"></path>
            </svg>
          </button>
        </div>

        <label class="price small">${datas.productId.price*datas.quantity} <br />
        <span className='cartdelspan'><IoTrash size={25} onClick={()=>TrashClick(datas._id)}/></span></label>

      </div>



      </>))}

    </div>

  </div>

  <div class="card coupons">
    <label class="title">Apply coupons</label>
    <form class="form">
        <input type="text" placeholder="Apply your coupons here" class="input_field"/>
        <button>Apply</button>
    </form>
  </div>




  <div class="card checkout">
    <label class="title">Checkout</label>
    <div class="details">
      <span>Your cart subtotal:</span>
      <span>${totalPrice}</span>
      <span>Discount through applied coupons:</span>
      <span>$0.0</span>
      <span>Shipping fees:</span>
      <span>$0.0</span>
    </div>
    <div class="checkout--footer">
      <label class="price"><sup>$</sup>{totalPrice}</label>
      <button class="checkout-btn">Order Now</button>
    </div>
    
  </div>



</div>



    </div>
      
    </>
  )
}
