import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "redux/slices/cartSlice";
import { updateProductQuantity } from "redux/slices/cartSlice";

import "Styles/productInCart.css";

export default function ProductInCart({ product, i }) {
	const dispatch = useDispatch();

	const getNewAmount = (e) => {
		let quantity = e.target.value;
		dispatch(updateProductQuantity({ quantity, product }));
	};

	return (
		<div className='productInCartContainer' key={i}>
			<div className='product_img'>
				<img src={product.imgSrc} alt={product.imgAlt} />
			</div>
			<div className='product_info'>
				<div className='product_info_text'>
					<p className='product_info_title'> {product.title}</p>
					<p>
						<small id='inStock'>In Stock</small>
					</p>
				</div>
				<div className='product_info_btns'>
					<select
						name='quantity '
						id='quantity_select'
						value={product.quantity}
						onChange={(e) => {
							getNewAmount(e);
						}}
					>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
					</select>
					<span className='product_info_btn_span'>|</span>
					<button
						className='removeProductBtn_btn'
						onClick={() => {
							dispatch(removeFromCart(i));
						}}
					>
						Remove from cart
					</button>
				</div>
			</div>
			<div className='product_price'>
				<strong>$</strong>
				<strong>{product.price * product.quantity}</strong>
			</div>
		</div>
	);
}
