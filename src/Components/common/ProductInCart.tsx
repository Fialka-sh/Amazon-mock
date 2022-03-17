import React from "react";
import { useAppDispatch } from "../../hooks";

import { UPDATE_PRODUCT_QUANTITY, REMOVE_FROM_CART } from "../../redux/slices/cartSlice";

import { StyledProductInCartImage } from "../../Styles/Image.style";
import StyledProductInCartContainer, {
	StyledProductInCartInfo,
	StyledProductInCartPrice,
	StyledProductInCartPrInfoText,
	StyledInStockText,
	StyledCategoryText,
	StyledProductInCartBtns,
} from "../../Styles/ProductInCart.style";
import StyledButton from "../../Styles/Button.style";
import Select from "./Select";
import { showPriceAfterDiscount } from "../../Assets/calculatePrice";

type ProductData = {
	id: string;
	title: string;
	name: string;
	primery_price: number;
	discount: number;
	rating: number;
	imgSrc: string;
	category: string;
	quantity: number;
};

type ProductToUpdate = {
	id: string;
	quantity: number;
};

export default function ProductInCart(props: { product: ProductData; i: number }) {
	const { product, i } = props;
	const { title, name, primery_price, discount, imgSrc, quantity, category } = product;
	const dispatch = useAppDispatch();

	const getNewAmount = (value: string) => {
		let newQuantity: number = parseInt(value);
		let objectTr: ProductToUpdate = {
			id: product.id,
			quantity: newQuantity,
		};
		dispatch(UPDATE_PRODUCT_QUANTITY({ ...objectTr }));
	};

	return (
		<StyledProductInCartContainer key={i}>
			<StyledProductInCartImage>
				<img src={imgSrc} alt={name} />
			</StyledProductInCartImage>

			<StyledProductInCartInfo>
				<StyledProductInCartPrInfoText>{title}</StyledProductInCartPrInfoText>

				<StyledInStockText>In Stock</StyledInStockText>
				<StyledCategoryText>
					<em>Category: </em>
					{category}
				</StyledCategoryText>

				<StyledProductInCartBtns>
					<Select getAmount={getNewAmount} product={product} />
					<span>|</span>

					<StyledButton
						removeProductButton
						onClick={() => {
							dispatch(REMOVE_FROM_CART(i));
						}}
					>
						Remove from cart
					</StyledButton>
				</StyledProductInCartBtns>
			</StyledProductInCartInfo>

			<StyledProductInCartPrice>
				<strong>$</strong>
				<strong>{(showPriceAfterDiscount(primery_price, discount) * quantity).toFixed(2)}</strong>
			</StyledProductInCartPrice>
		</StyledProductInCartContainer>
	);
}
