import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css"

function NavBar(){
  const navigate=useNavigate()
    return(

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
          <li><Link to="/bar" className="nav-link px-2 text-white">Pricing</Link></li>
        </ul>
        <form className="d-flex" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>
        <div className="ms-lg-3">
          <button type="button" className="btn btn-outline-light me-2" onClick={() => navigate("/login")}>Login</button>
          <button type="button" className="btn btn-warning" onClick={() => navigate("/createuser")}>Sign-up</button>
        </div>
      </div>
    </nav>
  </div>
</header>

    )
 }
 export default  NavBar;