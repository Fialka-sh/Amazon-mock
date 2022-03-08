import React from "react";
import { useAppDispatch } from "../../hooks";
import { addToCart } from "../../redux/slices/cartSlice";

import Star from "./Star";

import StyledButton from "../../Styles/Button.style";
import StyledProductContainer, { StyledProductInfo } from "../../Styles/Product.style";
import StyledProductImage from "../../Styles/Image.style";

interface ProductData {
	id: string;
	title: string;
	price: number;
	rating: number;
	imgSrc: string;
	imgAlt: string;
	quantity: number;
}

export default function Product(product: ProductData) {
	const { title, price, rating, imgSrc, imgAlt } = product;

	const dispatch = useAppDispatch();

	return (
		<StyledProductContainer>
			<StyledProductInfo>
				<p>{title}</p>
				<p>
					<small>$</small>
					<strong>{price}</strong>
				</p>

				<Star productRating={rating} />
			</StyledProductInfo>

			<StyledProductImage>
				<img src={imgSrc} alt={imgAlt} />
			</StyledProductImage>

			<StyledButton
				onClick={() => {
					dispatch(addToCart(product));
				}}
				type='button'
			>
				Add to cart
			</StyledButton>
		</StyledProductContainer>
	);
}

//** Other option of spread stars instead of Component **//
// Array(rating).fill().map(( _ , i )=> <p>🌟'</p>)
