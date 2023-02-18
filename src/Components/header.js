import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
// import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
function Header(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event)=> {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
<>
<Navbar bg="dark" variant="dark" style={{height:"60px"}}>
        <Container>
          <NavLink to="/" className="text-decoration-none mx-3">Add To cart</NavLink>
          <Nav className="me-auto">
          <NavLink to="/home" className="text-decoration-none">Home</NavLink>
          </Nav>
          <Badge badgeContent={1} color="primary" 
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}>
          <i className="fa-solid fa-cart-shopping text-white" style={{fontSize:25,cursore:"pointer"}}></i>
    </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:28}}>Your carts is empty</p>
                    <img src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?size=338&ext=jpg&ga=GA1.1.2014527337.1676605018&semt=ais" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
      </Menu>
      </Navbar>
</>
    );
}
export default Header;