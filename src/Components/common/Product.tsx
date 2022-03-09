import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { addToCart } from "../../redux/slices/cartSlice";

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
	quantity: number;
}

export default function Product(product: ProductData) {
	const { title, price, rating, imgSrc, imgAlt } = product;

	const dispatch = useAppDispatch();

	const [stars, setStars] = useState<string[]>([]);

	useEffect(() => {
		let tempStars: string[] = [];
		for (let i = 0; i < rating; i++) {
			tempStars.push("0");
		}

		setStars(tempStars);
		console.log(tempStars);
	}, [rating]);

	return (
		<StyledProductContainer>
			<StyledProductInfo>
				<p>{title}</p>
				<p>
					<small>$</small>
					<strong>{price}</strong>
				</p>

				<StyledStarContainer>
					{stars.map((star, i) => {
						return <StyledStar />;
					})}
				</StyledStarContainer>
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
