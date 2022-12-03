
import {React, useState }from 'react';
import SingUpPage from './components/SingUpPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ListUsers from './components/ListUsers';
import MainPage from './components/MainPage';
import CreateComputer from './components/CreateComputer';
import OrdersList from './components/OrdersList';

import Products from './components/Products';
import DeleteOrder from './components/DeleteOrder';

function App() {

  return (


    <BrowserRouter>
      <Routes>
         <Route path='/singup' element={<SingUpPage/>}/>
         <Route path='/' element={<LoginPage/>}/>
         {/* <Route path='/listUsers' element={<ListUsers/>}/> */}
         <Route path='/main/*' element={<MainPage/>}>
                <Route path='listUsers' element={<ListUsers/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='createpc' element={<CreateComputer/>}/>
                <Route path='orders' element={<OrdersList/>}/>
                <Route path='deleteOrder' element={<DeleteOrder/>}/>
          </Route>

      </Routes>
    </BrowserRouter>

   
   
  );
}

export default App;


