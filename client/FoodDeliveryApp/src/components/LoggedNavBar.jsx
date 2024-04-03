import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MyCart from "./MyCart";

function LoggedNavBar(){
  
  const [OpenCart,setOpenCart]=useState(false);
  const navigate=useNavigate()
  
  function handleLogOut(){
    localStorage.removeItem("authToken")
    navigate("/login")
  }
  const OpenCartMethod=()=>{
    setOpenCart(true);
   }

  

  
 
    return(<>
      <header className="p-3 text-bg-dark d-flex align-items-center" style={{height: "15vh"}}>
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link to="/" className={`navbar-brand d-flex align-items-center mb-2 mb-lg-0 text-white  ${styles.appname}`}>
        MealDrop
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link to="/" className="nav-link text-secondary">Home</Link></li>
          <li><Link to="/MyCart" className="nav-link px-2 text-white">My Orders</Link></li>
        </ul>
        <div className="ms-lg-3">
          <button type="button" className="btn btn-primary me-2" onClick={() => (OpenCartMethod())}>My Cart</button>
          <button type="button" className="btn btn-danger" onClick={() => handleLogOut()}>Log Out</button>
        </div>
      </div>
    </nav>
  </div>
</header>

  {OpenCart && <MyCart OpenCart={OpenCart} setOpenCart={setOpenCart}/>}
    </>)
}
export default LoggedNavBar;