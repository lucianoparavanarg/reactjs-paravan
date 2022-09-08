import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
    <BrowserRouter>
      <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
