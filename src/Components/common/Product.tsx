import React, { useState, useEffect, useRef } from "react";
import { useAppDispatch } from "../../hooks";
import { useNavigate } from "react-router-dom";

import { SHOW_PRODUCT_INFO } from "../../redux/slices/productsSlice";
import StyledStarContainer, { StyledStar } from "../../Styles/Star.style";

import StyledButton from "../../Styles/Button.style";
import StyledProductContainer, { StyledProductInfo } from "../../Styles/Product.style";
import StyledProductImage from "../../Styles/Image.style";
import { ShowDiscountPriceWithNoDecimals, ShowPriceDecimals } from "../../Assets/calculatePrice";

interface ProductData {
	id: string;
	title: string;
	name: string;
	primery_price: number;
	discount: number;
	rating: number;
	imgSrc: string;
	category: string;
	quantity: number;
}

export default function Product(product: ProductData, key: number) {
	const { title, primery_price, discount, rating, imgSrc, name } = product;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
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

	const showProductInfo = () => {
		dispatch(SHOW_PRODUCT_INFO(product));
		navigate("/ProductInfo");
	};
	return (
		<StyledProductContainer width={chosenWidth} grow={chosenGrow}>
			<StyledProductInfo>
				<p>{title}</p>
				<span>
					<small>$</small>
					<strong>
						{ShowDiscountPriceWithNoDecimals(primery_price, discount)}
						{"."}
						{ShowPriceDecimals(primery_price, discount)}
					</strong>
				</span>

				<StyledStarContainer>
					{stars.map((star, i) => {
						return <StyledStar key={i} />;
					})}
				</StyledStarContainer>
			</StyledProductInfo>

			<StyledProductImage>
				<img src={imgSrc} alt={name} />
			</StyledProductImage>

			<StyledButton showProductButton onClick={showProductInfo} type='button'>
				Show Product
			</StyledButton>
		</StyledProductContainer>
	);
}
