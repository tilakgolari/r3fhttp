import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {clearCart} from '../Slices/CartItmeSlice';




const PaymentSuccess = () => {


  const dispatch=useDispatch();


  useEffect(() =>{
    dispatch(clearCart());
  },[])




  return (
    <div className='payment'>  
      <h2>Your order is placed and In-Processing...</h2>
    </div>
  )
}

export default PaymentSuccess
