import React, { useState } from 'react'

export default function Counter() {

    const[count,setCount]=useState(0)
    console.log(count);
    const plus=()=>{
        setCount(count+1)
    }
    const minus=()=>{
        setCount(count-1)
    }


  return (
    <>
    <div className='container text-center'>
        <div className=''>
            <button onClick={minus}><b>-</b></button>
            <b>{count}</b>
            <button onClick={plus}><b>+</b></button>

        </div>


    </div>
      
    </>
  )
}
