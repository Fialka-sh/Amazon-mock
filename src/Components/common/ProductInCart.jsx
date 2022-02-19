import React from 'react';
import 'Styles/productInCart.css';

export default function ProductInCart() {
  return (
    <div className="productInCartContainer">
      <div className="product_img">
        {/* <img width="250" height="150" src={imgSrc} alt={imgAlt} /> */}
      </div>
      <div className="product_info">
        <p> title</p>
        <p>
          <small id="inStock">In Stock</small>
        </p>

        <button className="product__removeBtn_btn">
          <a href="">Remove from cart </a>
        </button>
      </div>

      <div className="product_price">
        <strong>$</strong>
        {/* <strong>{price}</strong> */}
      </div>
    </div>
  );
}
