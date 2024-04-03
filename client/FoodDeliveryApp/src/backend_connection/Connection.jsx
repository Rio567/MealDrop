import axios from "axios"
import { useEffect } from "react"
import { useContext} from "react";
import { ContextData } from "../store/ContextProvider";


function Connection(){
     const val=useContext(ContextData)
        useEffect(()=>{
        axios.get("http://localhost:3000/")
        .then(res=> val.AddItem(res.data))
        .catch((error)=>{
            console.log(error)
        })
    },[])
    useEffect(()=>{
        axios.get("http://localhost:3000/api/category")
        .then(res=>val.AddCategory(res.data))
        .catch((error)=>{
            console.log(error)
        })
    },[])
    return(<>
    
    </>)
}
export default Connection;