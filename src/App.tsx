import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { store } from './store/store';
import { Provider} from 'react-redux'
import ShipList from './components/ship/ShipList';
import ShipDetails from './components/ship/ShipDetails';
import axios from 'axios'

function App() {
 
  return (
    <Provider store={store}>
    <Routes>
      <Route path='/' element={<ShipList/>} />
      <Route path='/ship/:id' element={<ShipDetails />} />
    </Routes>
    </Provider>
    
  );
}

export default App;
