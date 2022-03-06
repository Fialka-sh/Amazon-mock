import React from "react";
import { useAppSelector } from "../hooks";
import { updatTotalProducts, updateTotaleToPay } from "../redux/slices/cartSlice";

import ProductInCart from "../Components/common/ProductInCart";

import "../Styles/cart.css";

export default function Cart() {
	const cart = useAppSelector((state) => state.cart.cart);
	const totalToPay = useAppSelector(updateTotaleToPay);
	const numOfProducts = useAppSelector(updatTotalProducts);

	return (
		<div className='cartContainer'>
			<div className='cartContainer__checkOut '>
				<p className='cartContainer__checkOut_subtotal'>
					Subtotel ({numOfProducts} items) : <strong>${totalToPay}</strong>
				</p>
				<div className='cartContainer__checkOut_btn'>
					<button className='checkoutBtn btn'>Proceed to checkout</button>
				</div>
			</div>
			<div className='cartConainer__cart'>
				<h1>Shopping Cart</h1>
				<span className='pPrice'>Price</span>
				<hr />
				{cart.map((product, i) => {
					return <ProductInCart product={product} key={i} i={i} />;
				})}

				<div className='cartContainer__total'>
					<p>
						Subtotel ({numOfProducts} items) : <strong>${totalToPay}</strong>
					</p>
				</div>
			</div>
		</div>
	);
}
