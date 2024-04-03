import { useNavigate } from "react-router-dom";
import { ContextData } from "../store/ContextProvider"
import styles from "./MyCart.module.css"
import { useContext, useEffect, useRef, useState } from "react"
import { MdDelete } from "react-icons/md";
import { MdClose } from "react-icons/md"


function MyCart(props){
  const val=useContext(ContextData);
  const [total,settotal]=useState(0)
  const List=val.cartList
 

  const CloseCartMethod=()=>{
    props.setOpenCart(false)
   
   }
  useEffect(()=>{
    let tempTotal=0
      for(let item of List){
        tempTotal=tempTotal+parseInt(item.price);
      }
      settotal(tempTotal)
  },[List])
   
      return(
        <div className={styles.outerContainer}>
        
         { (props.OpenCart)&&(List.length===0)?

          (<div className={`card text-bg-dark ${styles.container}`} >
             <button type="button" className={`btn btn-danger ${styles.closeButton}`} onClick={()=>(CloseCartMethod())}>
      <MdClose />
    </button>
              
          <img src="https://source.unsplash.com/random/pokemon" className="card-img" style={{opacity:0.3,objectFit: "cover", width: "100%",height: "100%"}}alt="..."/> 
          <div className={`card-img-overlay`}>
          <center><h1>My Cart</h1></center>
          <center><h1 style={{marginTop:"30%"}}>The Cart is Empty</h1></center>
            </div>
          </div>)
          :
          (<div className={`card text-bg-dark ${styles.container}`} >
      <button className={`btn btn-danger ${styles.closeButton}`} onClick={()=>(CloseCartMethod())}>
      <MdClose />
    </button>
    
      <img src="https://source.unsplash.com/random/pokemon" className="card-img" style={{opacity:0.3,objectFit: "cover", width: "100%",height: "100%"}} alt="..."/>
    
        <div className={`card-img-overlay`}>
        <center><h1>My Cart</h1></center>
      <table className={`table`} style={{opacity:1}}>
      <thead className="thead-dark">
     
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Option</th>
          <th scope="col">Quantity</th>
          <th scope="col">Amount</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {List.map((items,index)=>(
            <tr key={items.data._id}>
            <th scope="row">{index+1}</th>
            <td>{items.data.name}</td>
            <td>{items.quantity.current}</td>
            <td>{items.size.current}</td>
            <td>{items.price}</td>
           <td><button className="btn btn-danger mx-2" onClick={()=>(val.DeleteOrder(items.data.name))} ><MdDelete /></button></td> 
           
          </tr>
        ))}
        </tbody>
    </table>
    <h1>Total: ₹{total} only</h1>
    </div>
    <center><button type="button" className="btn btn-success" style={{marginTop:"0"}}>Pay</button></center>
    </div>
        )
         }
        </div>)
        

        
}

export default MyCart