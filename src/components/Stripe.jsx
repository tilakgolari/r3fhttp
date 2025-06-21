import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'


const Stripe = () => {


    const navigate=useNavigate();
    const [Loading,setLoading]=useState(true);
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const cartItems=useSelector((state) => state.cart.cartItems);
    
    console.log(cartItems);
    
    useEffect(() =>{

        const token=(localStorage.getItem('token'))
        //const article=JSON.stringify(cartItems).replace(/]|[[]/g, '')
        // const article=JSON.stringify(cartItems)
        // console.log(article)  
    
        if(token){
          setIsLoggedIn(true);
        }else{
          setIsLoggedIn(false);
        }
       
        setLoading(false);
    
    
       },[]);





    if(Loading)
    {
        return <div>Loading...</div>
    }


    const handleCheckOut=async() =>{

       const token=(localStorage.getItem('token'));
       const article=JSON.stringify(cartItems);
       const customConfig = {
        headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
        }
      }


      if(isLoggedIn)
      {
        const resp=await axios.post('https://r3f-env.eba-62zuape2.us-east-1.elasticbeanstalk.com/product/checkout', article,customConfig)
        .then((response) =>{


            if (response.data.sessionUrl)     
                {
              window.location.href = response.data.
              sessionUrl;
    
               }




        })


        .catch(
            (error) => console.log(error.response.data),
        )

      }



      else{
        navigate("/Login")
      }







    }


  return (
    <div>

     <button className= "checkout" onClick={()=> handleCheckOut()}>CheckOut</button>

      
    </div>
  )
}

export default Stripe



