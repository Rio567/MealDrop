import Card from "./Card";
import { useContext} from "react";
import { ContextData } from "../store/ContextProvider";
import styles from "./CardList.module.css"
function CardList(){
    const val=useContext(ContextData);
  //  console.log(val.itemList)
    return(
      <>
        
          {val.categoryName.map((data)=>( 
          <div key={data._id} className={styles.CategoryHeading}> 
          <h1 key={data._id}>{data.CategoryName}</h1>
          <div className={styles.grid_container}>
        {val.itemList.filter(items=>items.CategoryName===data.CategoryName)
        .map((data)=>(<Card key={data._id} data={data} className="grid-item"/>))}
        </div> 
        </div>))}
          
        
      </>
    )
}
export default CardList;