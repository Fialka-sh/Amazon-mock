import React from 'react';
import Star from './Star';
import 'Styles/product.css';

export default function Product({ title, price, rating, imgSrc, imgAlt }) {
  return (
    <div className="productContainer">
      <div className="product__info">
        <p> {title}</p>
        <p className="product__info_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__info_rating">
          <Star rating={rating} />
        </div>
      </div>
      <div className="product__img">
        <img width="250" height="150" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="product__addBtn centerIt">
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}

//** Other option of spread stars instead of Component **//
// Array(rating).fill().map(( _ , i )=> <p>🌟'</p>)
