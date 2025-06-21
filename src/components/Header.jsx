import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import Django from './django';
import { Link } from 'react-router-dom';





export default function ButtonAppBar() {


  const pauth=useSelector((state) => state.auth)
  const A=pauth.userName;



  
  const count=useSelector((state) => state.cart)
  // console.log(count.cartItems.length)
  const length=count.cartItems.length;


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" 
              sx={{bgcolor:"white", opacity:"1"}}
               >
        <Toolbar className="tool"  sx={{
      '@media (min-width: 600px)': {
         minHeight: '.5px',
      },
   }}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <a href="/" color="inherit">Home</a> */}
            <Link to = "/" style={{ color: 'inherit', textDecoration: 'none' }}> Home </Link>
          </Typography>
          {/* <a href= "/cart" color="inherit">Cart</a> */}

          <Link to = "/cart" style={{ color: 'inherit', textDecoration: 'none' }}> Cart </Link>

          <h4 className="cartLength">{length}</h4>

          &nbsp;
          &nbsp;
          &nbsp;

         

          {/* {A ? <a href="/login" color="inherit">Hello,{A}</a> : <a href="/login" color="inherit">Login</a>} */}

         {A ? <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }} >Hello,{A}</Link>
            : <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }} >Login</Link>}


        </Toolbar>
      </AppBar>

      <Django/>

    </Box>
  );
}
