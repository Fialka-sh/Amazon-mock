import React from 'react';
import ProductInCart from 'Components/common/ProductInCart';
import InfoIcon from '@mui/icons-material/Info';

import '../Styles/cart.css';

export default function Cart() {
  return (
    <div className="cartContainer">
      <div className="cartConainer__cart">
        <h1>Shopping Cart</h1>
        <span className="pPrice">Price</span>
        <hr />
        <ProductInCart />
        <ProductInCart />

        <ProductInCart />
        <ProductInCart />

        <div className="cartContainer__total">
          <p>
            Subtotel (//NUM// items) : <strong>$ //SUM//</strong>
          </p>
        </div>
      </div>
      <div className="cartContainer__checkOut ">
        <div>
          <InfoIcon className="infoIcon" />
          <small>
            <strong>Free shipping</strong>
          </small>
        </div>
        <p className="cartContainer__checkOut_subtotal">
          Subtotel (//NUM// items) : <strong>$ //SUM//</strong>
        </p>
        <div className="cartContainer__checkOut_btn">
          <button className="removeBtn btn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
