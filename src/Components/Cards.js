import React from "react";
import "./style.css";
import Cardsdata from "./Cardsdata";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "../Actions/Action";
function Cards() {
  const [data,setData]=useState(Cardsdata);
  const dispatch= useDispatch();
  const send =(e)=>{
dispatch(Add(e));
  }
    return(
<>
<div className="container mt-3">
<h2 className="text-center">Add to cart Your Menu</h2>
</div>
<div className="row d-flex justify-content-center align-items-center">{
  data.map((element,id) => {
return (
  <><div className="card mx-2 mt-4 card_style" style={{width: '22rem',border:"none"}} >
  <img src={element.imgdata} className="card-img-top mt-3" style={{height:"16rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{element.rname}</h5>
    <p className="card-text">price:₹ {element.price}</p>
    <div className="button_div d-flex justify-content-center"></div>
   <button className="btn btn-primary col-lg-10" onClick={()=>send(element)}>Add To Cart</button>
  </div>
</div>

  </>
)
  })
  }
</div>
</>
    );
};
export default Cards; 