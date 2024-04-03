import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from "./CreateUser.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function CreateUser(){
  const navigate=useNavigate()
  const [name,setName]=useState("")
  const [Address,setAddress]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  function handleName(e){
    setName(e.target.value)
  }
  function handleAddress(e){
    setAddress(e.target.value)
  }
  function handleEmail(e){
    setEmail(e.target.value)
  }
  function handlePassword(e){
    setPassword(e.target.value)
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    alert(`Welcome ${name}, enjoy you meal `)
    try{
      await axios.post("http://localhost:3000/api/createuser",{
        Name:name,
        Location:Address,
        Password:password,
        Email:email,
      })
      .then(res=>console.log(res))
      navigate("/login")
    }
    catch(error){
        console.log("error ocuur while post data",error)
    }
   
   
  }
    return(<>
       <NavBar/>
        
        <form  className={styles.SignUpContainer} onSubmit={(e)=>(handleSubmit(e))}>
            <h1 className="mb-5">Sign-up Page</h1>
        <div className={`form-group ${styles.innercontain}`}>
    <label htmlFor="Name">User Name</label>
    <input type="text" value={name} className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" onChange={(e)=>(handleName(e))}/>
    <small id="nameHelp" className="form-text"style={{color:"white"}}>Type your full name here.</small>
  </div>
  <div className={`form-group ${styles.innercontain}`}>
    <label htmlFor="location">Address</label>
    <input type="text"  value={Address} className="form-control" id="location" aria-describedby="locationHelp" placeholder="Enter Location"onChange={(e)=>(handleAddress(e))}/>
    <small id="Location" className="form-text "style={{color:"white"}}>Type your Location.</small>
  </div>
  <div className={`form-group ${styles.innercontain}`}>
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>(handleEmail(e))}/>
    <small id="emailHelp" className="form-text "style={{color:"white"}}>We'll never share your email with anyone else.</small>
  </div>
  <div className={`form-group ${styles.innercontain}`}>
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" value={password} className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>(handlePassword(e))}/>
  </div>
  <div className={`form-group  form-check ${styles.innercontain}`}>
    <input type="checkbox" className={`form-check-input ${styles.checkinput}`}id="exampleCheck1"/>
    <label className={`form-check-label ${styles.checklabel}`} htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


       <Footer/>
    </>)
}
export default CreateUser;