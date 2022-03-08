import React from "react";
import { useAppSelector } from "../hooks";
import { updatTotalProducts, updateTotaleToPay } from "../redux/slices/cartSlice";

import ProductInCart from "../Components/common/ProductInCart";

import StyledButton from "../Styles/Button.style";
import StyledCartContainer, { StyledCart, StyledCartCheckOut, StyledCartTotal } from "../Styles/Cart.style";

export default function Cart() {
	const cart = useAppSelector((state) => state.cart.cart);
	const totalToPay = useAppSelector(updateTotaleToPay);
	const numOfProducts = useAppSelector(updatTotalProducts);

	return (
		<StyledCartContainer>
			<StyledCartCheckOut>
				<p>
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
			</StyledCartCheckOut>

			<StyledCart>
				<h1>Shopping Cart</h1>
				<span>Price</span>
				<hr />
				{cart.map((product, i) => {
					return <ProductInCart product={product} key={i} i={i} />;
				})}

				<StyledCartTotal>
					<p>
						Subtotel ({numOfProducts} items) : <strong>${totalToPay}</strong>
					</p>
				</StyledCartTotal>
			</StyledCart>
		</StyledCartContainer>
	);
}
