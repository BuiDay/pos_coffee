import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {path} from '../src/utils/path'
import Home from './pages/public/Home';
import HomePage from './pages/public/HomePage';
import System from './pages/system/System';
import Category from './pages/system/Category';
import Order from './pages/public/Order';
import Products from './pages/system/Products';
function App() {
  return (
    <div className='App'>
     <Routes>
        <Route path={path.HOME} element={<Home/>}>
          <Route path={path.HOME} element = {<HomePage/>}/>
          <Route path={path.ORDER} element = {<Order/>}/>
        </Route>
        <Route path={path.SYSTEM} element={<System />} >
          <Route path={path.CATEGORY} element={<Category />} />
          <Route path={path.PRODUCTS} element={<Products />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
