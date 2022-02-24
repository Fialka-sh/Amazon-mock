import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/slices/cartSlice";

import Star from "./Star";
import "Styles/product.css";

export default function Product({ product, product: { title, price, rating, imgSrc, imgAlt } }) {
	const dispatch = useDispatch();
	return (
		<div className='productContainer'>
			<div className='product__info'>
				<p className='product__info_title'> {title}</p>
				<p className='product__info_price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__info_rating'>
					<Star rating={rating} />
				</div>
			</div>
			<div className='product__img'>
				<img width='250' height='150' src={imgSrc} alt={imgAlt} />
			</div>
			<div className='product__addBtn centerIt'>
				<button
					className='btn'
					onClick={() => {
						dispatch(addToCart(product));
					}}
				>
					Add to cart
				</button>
			</div>
		</div>
	);
}

//** Other option of spread stars instead of Component **//
// Array(rating).fill().map(( _ , i )=> <p>🌟'</p>)
