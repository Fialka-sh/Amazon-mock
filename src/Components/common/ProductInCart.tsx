import React from "react";
import { useAppDispatch } from "../../hooks";

import { removeFromCart } from "../../redux/slices/cartSlice";
import { updateProductQuantity } from "../../redux/slices/cartSlice";

import "../../Styles/productInCart.css";

type ProductData = {
	id: string;
	title: string;
	price: number;
	rating: number;
	imgSrc: string;
	imgAlt: string;
	quantity: number;
};

type ProductToUPdate = {
	id: string;
	quantity: number;
};

export default function ProductInCart(props: { product: ProductData; i: number }) {
	const { product, i } = props;
	const dispatch = useAppDispatch();

	const getNewAmount = (value: string) => {
		let quantity: number = parseInt(value);
		let objectTr: ProductToUPdate = {
			id: product.id,
			quantity: quantity,
		};
		dispatch(updateProductQuantity({ ...objectTr }));
	};

	return (
		<div className='productInCartContainer' key={i}>
			<div className='product_img'>
				<img src={product?.imgSrc} alt={product?.imgAlt} />
			</div>
			<div className='product_info'>
				<div className='product_info_text'>
					<p className='product_info_title'> {product?.title}</p>
					<p>
						<small id='inStock'>In Stock</small>
					</p>
				</div>
				<div className='product_info_btns'>
					<select
						name='quantity '
						id='quantity_select'
						value={product?.quantity}
						onChange={(e) => {
							getNewAmount(e.target.value);
						}}
					>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
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
				<strong>{product?.price * product?.quantity}</strong>
			</div>
		</div>
	);
}
