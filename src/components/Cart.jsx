import React, { useEffect, useState } from 'react'
import Stripe from './Stripe';

const Cart = () => {

  const [storedValue,setStoredValue]=useState(null)



  useEffect(() =>{

    const item=localStorage.getItem('Image');
    setStoredValue(item);
   // console.log(storedValue);


  },[]);






  return (
    <div className='cart'>
      <h3 className='yourCart'>Your Cart</h3>

      {storedValue 
      ? <img src={storedValue} className='imgModel'/> 
      : <h3 className="empty">Empty</h3>}
      


      <div>
        <Stripe/>
      </div>

    </div>
  )
}

export default Cart
