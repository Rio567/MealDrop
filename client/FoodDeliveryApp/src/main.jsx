import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Body from './components/Body.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import "./index.css";
import CreateUser from './components/CreateUser.jsx';
import MyCart from './components/MyCart.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/login",element:<Login/>},
      {path:"/createuser",element:<CreateUser/>},
      {path:"/MyCart",element:<MyCart/>}
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
