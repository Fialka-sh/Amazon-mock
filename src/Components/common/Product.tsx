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
			{/* <div className='productContainer'> */}
			<StyledProductInfo>
				{/* <div
				 className='product__info'
				> */}
				<p
				// className='product__info_title'
				>
					{" "}
					{title}
				</p>
				<p
				// className='product__info_price'
				>
					<small>$</small>
					<strong>{price}</strong>
				</p>

				{/* <div className='product__info_rating'> */}
				<Star productRating={rating} />
				{/* </div> */}

				{/* </div> */}
			</StyledProductInfo>

			{/* <div className='product__img'> */}
			<StyledProductImage>
				<img src={imgSrc} alt={imgAlt} />
			</StyledProductImage>
			{/* </div> */}
			{/* <div className='product__addBtn centerIt'> */}
			<StyledButton
				// className='btn'
				onClick={() => {
					dispatch(addToCart(product));
				}}
				type='button'
			>
				Add to cart
			</StyledButton>
			{/* </div> */}
			{/* </div> */}
		</StyledProductContainer>
	);
}

//** Other option of spread stars instead of Component **//
// Array(rating).fill().map(( _ , i )=> <p>🌟'</p>)
