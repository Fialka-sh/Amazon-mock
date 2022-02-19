// Core
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from './Components/header/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

// Styles
import './Styles/app.css';

export const App = () => (
  <div className="app">
    <Header />
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Cart />} />

        {/* <Route exact path="checkout" element={<Cart />} /> */}
      </Routes>
    </BrowserRouter>
  </div>
);
