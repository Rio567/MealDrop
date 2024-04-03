import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";
import Carasouel from "./Carasoul";

import LoggedNavBar from "./LoggedNavBar";
import styles from "./Home.module.css";


function Home(){
   
  
   return(
    <div className={styles.containerhome}>
    {(localStorage.getItem("authToken"))?   <LoggedNavBar/>:<NavBar/>}
    
    
    <Carasouel/>
    <Body/>
    <Footer/>
   
    </div>
   )
}
export default Home