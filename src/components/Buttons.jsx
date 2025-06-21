import React from 'react'
import Button from '@mui/material/Button';

const Buttons = ({handleClick}) => {
  
 


  return (
    <div className='Button'>
      <Button variant="contained" 
      onClick={handleClick}>
      Add to Cart
     
    </Button>
    </div>
  )
}

export default Buttons
