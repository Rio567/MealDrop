import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from "./CreateUser.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Login(){
  const [Inputemail,SetInputemail]=useState("")
  const [inputPassword,SetinputPassword]=useState(" ")
  const navigate=useNavigate()

  const handleEmail=(e)=>{
    SetInputemail(e.target.value)
  }
  const handlePassword=(e)=>{
    SetinputPassword(e.target.value)
  }
  const handleLogin=async(e)=>{
         e.preventDefault();
         try{
              await axios.post("http://localhost:3000/api/login",{
                Email:Inputemail,
                Password:inputPassword
              })
              .then(response=>{
                alert(response.data.message);
                localStorage.setItem("authToken",response.data.authToken)
                // console.log(response.data.authToken)
              navigate("/");
            }) 
         }
         catch(error){
          
              alert(`error to login  ${error.response.data.message}`)
         }
  }
    return(
        <>
       <NavBar/>
       <form  className={styles.SignUpContainer} style={{backgroundColor:"#14990d"}} onSubmit={(e)=>(handleLogin(e))}>
            <h1 className="mb-5">Login</h1>
  <div className={`form-group ${styles.innercontain}`}>
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>(handleEmail(e))}/>
    <small id="emailHelp" className="form-text "style={{color:"white"}}>We'll never share your email with anyone else.</small>
  </div>
  <div className={`form-group ${styles.innercontain}`}>
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password"  className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>(handlePassword(e))} />
  </div>
  <div className={`form-group  form-check ${styles.innercontain}`}>
    <input type="checkbox" className={`form-check-input ${styles.checkinput}`}id="exampleCheck1"/>
    <label className={`form-check-label ${styles.checklabel}`} htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
       <Footer/>
        </>
        
    )
}
export default Login;