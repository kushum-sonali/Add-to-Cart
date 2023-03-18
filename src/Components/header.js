import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import CardDetailes from "./CardDetailes";
import { DLT } from "../Actions/Action";
// import MenuItem from '@mui/material/MenuItem';
function Header(){
const [price,setPrice]=useState(0);
console.log(price);
const getdata=useSelector((state)=> state.cartreducer.carts);
console.log(getdata);
const dispatch =useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event)=> {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dlt = (id)=>{
    dispatch(DLT(id))
  }
  const total=()=>{
    let price = 0;
    getdata.map((ele,k)=>{
      price=ele.price + price;
   
    });
       setPrice(price);
  };
   useEffect(()=>{
    total();
   },[total])

    return(
<>
<Navbar bg="dark" variant="dark" style={{height:"60px"}}>
        <Container>
          <NavLink to="/" className="text-decoration-none mx-3">Add To cart</NavLink>
          <Nav className="me-auto">
          <NavLink to="/home" className="text-decoration-none">Home</NavLink>
          </Nav>
          <Badge badgeContent={getdata.length} color="primary" 
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
         {
          getdata.length ?
          <div className="card_details " style={{width:"24rem",padding:10}}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Resturent</th>
                </tr>
              </thead>
              <tbody>
                {
                  getdata.map((e)=>{
                    return(
                      <>
                      <tr>
                         <td>
                          <NavLink to={`/cart/${e.id}`}   onClick={handleClose}> <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" /></NavLink>
                        </td> 
                        <td>
                          <p>{e.rname}</p>
                          <p>₹{e.price}</p>
                          <p>Quanty: {e.qnty}</p>
                          <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                            <i className="fas fa-trash smalltrash"></i>
                          </p>
                        </td>
                        <td style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                        <i className="fas fa-trash"></i>
                        </td>
                      </tr>
                      </>
                    );
                  })
                }
                <p className='text-center'>Total : ₹{price} </p>
              </tbody>
            </Table>
          </div>:

        <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:28}}>Your carts is empty</p>
                    <img src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?size=338&ext=jpg&ga=GA1.1.2014527337.1676605018&semt=ais" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
         } 

      </Menu>
      </Navbar>
</>
    );
}
export default Header;