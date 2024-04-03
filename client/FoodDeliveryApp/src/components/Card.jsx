import { useContext, useRef, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { ContextData } from "../store/ContextProvider";


function Card(props){
  const val=useContext(ContextData)
   const obj=props.data.options[0]
  const changequantity=useRef(1);
  const changeOption=useRef(obj[Object.keys(obj)[0]])
  // let price=useRef(changequantity.current*changeOption.current)
  const [price,setprice]=useState(changequantity.current*changeOption.current)
  function onchangeQuantity(value){
    changequantity.current=value  
    setprice(changequantity.current*changeOption.current)
  }
  function onchangeOption(value){
     changeOption.current=value
     setprice(changequantity.current*changeOption.current)
     
  }
 return(
    <>
      <div  className="card mt-3" style={{width: "20rem",minHeight:"470px",marginLeft:"10px"}}>
  <img src={props.data.img} className="card-img-top" style={{width:"100%",height:"250px",objectFit:"fill"}} alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{props.data.name}</h5>
    <p  className="card-text">{props.data.description}</p>
    <div className="container w-100">
       <select className="m-2 h-100  rounded"onChange={(e)=>(onchangeQuantity(e.target.value))}>
         {Array.from(Array(4),(e,i)=>{
            return(
                <option  key={i} value={i+1}>{i+1}</option>
            )
         })}
       </select>

       <select className="m-2 h-100  rounded" onChange={(e)=>(onchangeOption(obj[e.target.value]))}>
          
            {
            Object.keys(props.data.options[0]).map((key,i)=>{
              return(
                <option key={i} value={key}>{key}</option>
                //  console.log(key[i])
              )
            })
            }

       </select>
      <div className="fs-5 d-inline h-100 p-4"><FaIndianRupeeSign /><b>{price}</b></div>
    </div>
    <button   className="btn btn-primary" style={{marginTop:"5px"}} onClick={()=>(val.AddOrder(props.data,changeOption,changequantity,price))}>{<FaShoppingCart />} Add To Cart </button>
  </div>
</div>
    </>
 )
}
export default Card;