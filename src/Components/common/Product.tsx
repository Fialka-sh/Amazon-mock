import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch } from "../../hooks";
import { ADD_TO_CART } from "../../redux/slices/cartSlice";

import StyledStarContainer, { StyledStar } from "../../Styles/Star.style";

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
	category: string;
	quantity: number;
}

export default function Product(product: ProductData, key: number) {
	const { title, price, rating, imgSrc, imgAlt } = product;
	const dispatch = useAppDispatch();

	const [stars, setStars] = useState<string[]>([]);

	const styleProductOptions = {
		width: [350, 500, 700],
		grow: [2, 3, 4],
	};

	let chosenWidth =
		styleProductOptions.width[useRef(Math.floor(Math.random() * styleProductOptions.width.length)).current];
	let chosenGrow =
		styleProductOptions.grow[useRef(Math.floor(Math.random() * styleProductOptions.grow.length)).current];

	useEffect(() => {
		let tempStars: string[] = [];
		for (let i = 0; i < rating; i++) {
			tempStars.push("0");
		}
		setStars(tempStars);
	}, [rating]);

	return (
		<StyledProductContainer width={chosenWidth} grow={chosenGrow}>
			<StyledProductInfo>
				<p>{title}</p>
				<span>
					<small>$</small>
					<strong>{price}</strong>
				</span>

				<StyledStarContainer>
					{stars.map((star, i) => {
						return <StyledStar key={i} />;
					})}
				</StyledStarContainer>
			</StyledProductInfo>

			<StyledProductImage>
				<img src={imgSrc} alt={imgAlt} />
			</StyledProductImage>

			<StyledButton
				addToCartButton
				onClick={() => {
					dispatch(ADD_TO_CART(product));
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
