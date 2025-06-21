import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import {  setColor1 } from '../Slices/ColorSlice'
import { setDecal } from '../Slices/DecalSlice'


const ColorComponent = () => {



const dispatch=useDispatch ();
const COLOR_ARR = [
        {
            color:'#373737',
            name:'Black'
        },
        {
            color:'#D0D5DD',
            name:'White'
        },
        {
            color:'#979C98',
            name:'Cobblestone'
        },
        {
            color:'#9F072D',
            name:'Sport Red'
        },
        {
            color:'#D4CCC3',
            name:'Sail'
        },
        {
            color:'#151468',
            name:'Old Royal'
        },
        {
            color:'#A0BBE0',
            name:'Royal Tint'
        },
        {
            color:'#E8CED2',
            name:'Pink Foam'
        },
        {
            color:'#E48F3E',
            name:'Kumquat'
        },
        {
            color:'#FFD73D',
            name:'Tour Yellow'
        },
        {
            color:'#EDEBDE',
            name:'Light Bone'
        },
        {
            color:'#316E55',
            name:'Malachite'
        },
    ]   
   
    const decals = ['react', 'three2', 'pmndrs']
   
   const handleClick=(color) =>{
 
        dispatch(setColor1(color))
       
     
   } 

   const handleDecal=(decal) =>{
 
    dispatch(setDecal(decal))
 
} 




  return (
    <div>
    <section>
        
        <div className="color-options" >

          {COLOR_ARR.map((color) => (
            <div
              key={color.name}
              className="circle"
              style={{ background: color.color }}
              onClick={() => handleClick(color.color)}></div>
          ))}

        </div>


        <div className="decals">
          <div className="decals--container">
            {decals.map((decal) => (

              <div key={decal} className="decal">
                <img src={decal + '.png'} alt="brand" 
                 onClick={() => handleDecal(decal)}/>
              </div>

            ))}
          </div>
        </div>
        

    </section>

    
    
    </div>
    
  )
}

export default ColorComponent
