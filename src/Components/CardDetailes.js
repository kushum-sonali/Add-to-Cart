import { fontSize } from "@mui/system";
import React, { useEffect } from "react"
import Table from 'react-bootstrap/Navbar'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useState} from "react";
import { DLT,Add,REMOVE } from "../Actions/Action";
const CardDetailes = () =>{
    const[data,setData]=useState([]);
    console.log(data);
    const {id} = useParams();
    console.log(id);
const history =useNavigate();

    const dispatch = useDispatch();
    const getdata=useSelector((state)=> state.cartreducer.carts);
console.log(getdata);
const Compare = ()=>{
    let comparedata=getdata.filter((e)=>{
        return e.id == id;
    }); 
    setData(comparedata);
}
// add data 
const send =(e)=>{
    dispatch(Add(e));
      }
const dlt = (id)=>{
    dispatch(DLT(id));
    history("/");
  }
  //remove one 
  const remove=(iteam)=>{
    dispatch(REMOVE(iteam))
  }
     
useEffect(()=>{
    Compare();

},[id]);

    return(
<>
<div className="container mt-2">
    <h2 className="text-center"> Items Details pages</h2>
    
<section className="container mt-3">
<div className="iteamsdetails  ">
    {
        data.map((ele)=>{
            return (
                <>
                <div className="items_img ">
        <img  src={ele.imgdata}></img>
    </div>
    <div className="details">
<Table >
<tr >
    <td>
        <p><strong>Resturant</strong>: {ele.rmame}</p>
        <p><strong>Price</strong>: ₹ {ele.price} </p>

        <p><strong>Dishes</strong>: {ele.address}</p>

        <p><strong>Total</strong>: ₹ {ele.price*ele.qnty}</p>
        <div className="mt-5 d-flex aline-items-center justify-content-between" style={{width:100 , cursor:"pointer",background:"#ddd",color:"#111"}}>
<span style={{fontSize: 24}} onClick={ele.price<=1 ? ()=>dlt(ele.id):()=>remove(ele)}>-</span>
<span style={{fontSize: 22}}>{ele.qnty}</span>

<span style={{fontSize: 24}} onClick={()=>send(ele)}>+</span>

        </div>
    </td>
    <td>
        <p><strong> Rating : <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ⋆</span></strong></p>
        <p><strong>Order Review :</strong><span>{ele.somedata} </span></p>
        <p><strong>Remove : </strong><span><i className="fas fa-trash" onClick={()=>dlt(ele.id)} style={{color  
        : "red" ,fontSize:20 ,cursor:"pointer"}}></i></span></p>
    </td>
</tr>
</Table>
    </div>
                </>
            )
        })
    }
</div>
</section>
</div>
</>
    );
};
export default CardDetailes;