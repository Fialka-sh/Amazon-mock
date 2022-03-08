import React from "react";
import { useAppSelector } from "../hooks";
import { updatTotalProducts, updateTotaleToPay } from "../redux/slices/cartSlice";

import ProductInCart from "../Components/common/ProductInCart";

import "../Styles/cart.css";
import StyledButton from "../Styles/Button.style";
import StyledCartContainer from "../Styles/Cart.style";
import { StyledCart, StyledCartCheckOut, StyledCartTotal } from "../Styles/Cart.style";

export default function Cart() {
	const cart = useAppSelector((state) => state.cart.cart);
	const totalToPay = useAppSelector(updateTotaleToPay);
	const numOfProducts = useAppSelector(updatTotalProducts);

	return (
		<StyledCartContainer>
			{/* <div className='cartContainer'>  */}
			<StyledCartCheckOut>
				{/* <div className='cartContainer__checkOut '> */}
				<p
				// className='cartContainer__checkOut_subtotal'
				>
					Subtotel ({numOfProducts} items) : <strong>${totalToPay}</strong>
				</p>
				<div className='cartContainer__checkOut_btn'>
					<StyledButton
						checkoutButton
						//  className='checkoutBtn'
						type='button'
					>
						Proceed to checkout
					</StyledButton>
				</div>
				{/* </div> */}
			</StyledCartCheckOut>

			<StyledCart>
				{/* <div className='cartConainer__cart'> */}
				<h1>Shopping Cart</h1>
				<span
				// className='pPrice'
				>
					Price
				</span>
				<hr />
				{cart.map((product, i) => {
					return <ProductInCart product={product} key={i} i={i} />;
				})}

				<StyledCartTotal>
					{/* <div className='cartContainer__total'> */}
					<p>
						Subtotel ({numOfProducts} items) : <strong>${totalToPay}</strong>
					</p>
					{/* </div> */}
				</StyledCartTotal>
				{/* </div> */}
			</StyledCart>

			{/* </div> */}
		</StyledCartContainer>
	);
}
