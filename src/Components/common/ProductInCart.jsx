import React from "react";

import "Styles/productInCart.css";

export default function ProductInCart({ product, i, updateProductAmount, removeFromCart }) {
	return (
		<div className='productInCartContainer' key={i}>
			<div className='product_img'>
				<img src={product.imgSrc} alt={product.imgAlt} />
			</div>
			<div className='product_info'>
				<div className='product_info_text'>
					<p> {product.title}</p>
					<p>
						<small id='inStock'>In Stock</small>
					</p>
				</div>
				<div className='product_info_btns'>
					<select
						name='quantity '
						id='quantity_select'
						value={product.amount}
						onChange={(e) => {
							updateProductAmount(e, product);
						}}
					>
						<option value='1'> 1</option>
						<option value='2'> 2</option>
						<option value='3'> 3</option>
						<option value='4'> 4</option>
					</select>
					<button
						className='removeProductBtn_btn btn'
						onClick={() => {
							removeFromCart(i, product);
						}}
					>
						Remove from cart
					</button>
				</div>
			</div>
			<div className='product_price'>
				<strong>$</strong>
				<strong>{product.price * product.amount}</strong>
			</div>
		</div>
	);
}
