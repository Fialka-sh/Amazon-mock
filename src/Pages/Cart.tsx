import { useAppSelector } from "../hooks";
import { updatTotalProducts, updateTotaleToPay } from "../redux/slices/cartSlice";

import ProductInCart from "../Components/common/ProductInCart";

import StyledButton from "../Styles/Button.style";
import StyledCartContainer, { StyledCart, StyledCartCheckOutArea, StyledCartTotal } from "../Styles/Cart.style";

export default function Cart(): JSX.Element {
	const cart = useAppSelector((state) => state.cart.cart);
	const totalToPay = useAppSelector(updateTotaleToPay);
	const numOfProducts = useAppSelector(updatTotalProducts);

	return (
		<StyledCartContainer>
			<StyledCartCheckOutArea>
				<p>
					Subtotal ({numOfProducts} items) : <strong>${totalToPay}</strong>
				</p>
				<StyledButton checkoutButton type='button'>
					Proceed to checkout
				</StyledButton>
			</StyledCartCheckOutArea>

			<StyledCart>
				<h1>Shopping Cart</h1>
				<span>Price</span>
				<hr />
				{cart.map((product, i) => {
					return <ProductInCart product={product} key={i} i={i} />;
				})}

				<StyledCartTotal>
					<p>
						Subtotal ({numOfProducts} items) : <strong>${totalToPay}</strong>
					</p>
				</StyledCartTotal>
			</StyledCart>
		</StyledCartContainer>
	);
}
