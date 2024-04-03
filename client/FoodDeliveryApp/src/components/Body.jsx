import CardList from "./CardList";
import style from "./Body.module.css"



function Body(){
   
    return(
        <>
       
        <div className={style.containerbody}> 
         <CardList/>
        </div>
        </>
    )
 }
 export default Body;