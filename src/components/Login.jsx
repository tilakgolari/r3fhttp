import React from 'react'
import { useState } from 'react';
import { loginUser } from '../Slices/loginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [username,setName] =useState('');
  const [password,setPassword]=useState('');
  const dispatch=useDispatch();
  const navigate=useNavigate();

  function handleSubmit(event){

    event.preventDefault();


    let userCredential={"userName": username,"password":password}

    dispatch(loginUser(userCredential))
    .then((result)=>{

      if(result.payload)
      {
        setName('');
        setPassword('');
        navigate('/')
      }


    })



  }






  return (
    <div className='Form'>
     <p>Please Login!</p>
     <form>

      <div className='Name'>

      <label>Name</label>
        
        <input type="name" placeholder='Enter Name'
          value={username}
          onChange={e=>setName(e.target.value)} />

        </div>


        <div className='Password'>

          <label>Password</label>
          <input
          type="password"
          placeholder='Enter password'
          value={password}
          onChange={e=>setPassword(e.target.value)}
          />

      </div>


      <button  onClick={handleSubmit} className='Login-Button'>Login</button>
  

     </form>
      








    </div>
  )
}

export default Login
