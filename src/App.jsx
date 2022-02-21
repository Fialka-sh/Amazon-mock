// Core
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import Header from './Components/header/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

// Styles
import './Styles/app.css';

export const App = () => {
  const [cart, setCart] = useState([]);
  const [numOfProducts, setNumOfProducts] = useState(0);
  const [totalToPay, setTotalToPay] = useState(0);

  return (
    <div className="app">
      <Header numOfProducts={numOfProducts} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              numOfProducts={numOfProducts}
              setNumOfProducts={setNumOfProducts}
              totalToPay={totalToPay}
              setTotalToPay={setTotalToPay}
            />
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              numOfProducts={numOfProducts}
              setNumOfProducts={setNumOfProducts}
              totalToPay={totalToPay}
              setTotalToPay={setTotalToPay}
            />
          }
        />
      </Routes>
    </div>
  );
};
