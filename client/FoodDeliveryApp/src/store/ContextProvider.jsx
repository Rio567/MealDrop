import { createContext, useReducer, useState } from "react";

export const ContextData=createContext({
    itemList:[],
    categoryName:[],
    cartList:[],
    AddItem:()=>{},
    AddCategory:()=>{},
    AddOrder:()=>{},
    DeleteOrder:()=>{}
});

const CartReducerMethod=(currList,action)=>{
    let newList=[]
    if(action.type==="ADD-ORDER"){
        let found=false;
        // console.log(currList.data)
        for(let item of currList){
            if(item.data.name===action.payload.data.name){
                item.quantity=action.payload.quantity
                item.size=action.payload.size
                item.price=action.payload.price
                found=true;
                 break;
            }
        }
        if(found===true){
            newList=[...currList]
            // console.log(true)
        }
       if(found===false){
        // console.log(false)
        const newObj={
            data:action.payload.data,
            quantity:action.payload.quantity,
            size:action.payload.size,
            price:action.payload.price
        }
        
        newList=[newObj,...currList]
       }
    }

    if(action.type==="DELETE-ORDER"){
        for(let item of currList){
            // console.log(action.payload.name)
            if(item.data.name!=action.payload.name){
                newList.push(item)
            }
            
        }
        // console.log(newList)
    }
    return newList
}

function ContextProvider({children}){
    const [cartList,dispatch]=useReducer(CartReducerMethod,[]);
   const[itemList,setItemList]=useState([]);
   const [categoryName,setCategory]=useState([]);
   


  
    const AddOrder=(data,quantity,size,price)=>{
        const addEvent={
            type:"ADD-ORDER",
            payload:{
                data:data,
                quantity:quantity,
                size:size,
                price:price
            }
        }
        dispatch(addEvent)
    }

    const DeleteOrder=(name)=>{
        const DeleteEvent={
            type:"DELETE-ORDER",
            payload:{
                name:name
            }
        }
        dispatch(DeleteEvent)
    }


   const AddItem=(newList)=>{
    // console.log(newList)
    setItemList(newList)
   }

   const AddCategory=(newCategory)=>{
    setCategory(newCategory)
   }
  
 
   


    return(
        <ContextData.Provider value={{
             itemList,
             categoryName,
             cartList,
             AddItem,
             AddCategory,
             AddOrder,
             DeleteOrder,
            
        }}>
        {children}
        </ContextData.Provider>
    )
}
export default ContextProvider;