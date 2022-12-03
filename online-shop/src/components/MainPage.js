import React, { Component } from 'react';
import { Outlet } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles.css';
import CreateComputer from './CreateComputer';
import ListUsers from './ListUsers';
import OrdersList from './OrdersList';

import Products from './Products';
class MainPage extends Component{    

    render(){
        return(
            <>
                  
             <nav class="navbar navbar-expand-lg " >
               
               <a class="navbar-brand m-3" href=" "> Online Shop  </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
               

           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div class="navbar-nav">
                   <a className={"nav-link" + (this.props.page === 1 ? " active" : "")} href='listUsers' aria-current="page" >Listar usuarios</a>
                   <a className={"nav-link" + (this.props.page === 2 ? " active" : "")} href='products'>Productos</a>
                   
                   <a className={"nav-link" + (this.props.page === 4 ? " active" : "")} href='createpc'>Agregar nuevo pc</a>
                   <a className={"nav-link" + (this.props.page === 5 ? " active" : "")} href='orders'>Listar Ordenes</a>
                   <a className={"nav-link" + (this.props.page === 6 ? " active" : "")} href='deleteOrder'>Eliminar una orden</a>
                   <button className={"nav-link bg-danger" + (this.props.page === 3 ? " active" : "")} onClick={newOrder}>Carrito</button>
               </div>
           </div>
           </nav>
           <Outlet/>
           

          
            </>
        )
    }
}
export default MainPage
const newOrder = async () => {
    let url = 'http://localhost:8080/orders'
    const tkn = localStorage.getItem("Token")
    let storage = localStorage.getItem('cart') 
    const arr = JSON.parse(storage)
    console.log(arr)
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': "application/json",
        'accept' : "application/json",
        'Authorization': 'Bearer '+ tkn
      },
      body: arr
      
  })
 console.log(res)
  const answer = await res.json()
  console.log(res.status)
  if (res.status == 200) {
    alert(`Se agrego con exito ${answer.name} ${answer.id}`)
    //localStorage.setItem("Token",answer.token)
  
  }


}