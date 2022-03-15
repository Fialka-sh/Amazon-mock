import React, { useEffect, useState } from "react";
import Select from "../Components/common/Select";
import { useAppDispatch, useAppSelector } from "../hooks";
import { ADD_TO_CART } from "../redux/slices/cartSlice";
import StyledButton from "../Styles/Button.style";

import { StyledProductInfoImage } from "../Styles/Image.style";
import {
	StyledProductInfoContainer,
	StyledProductInfoText,
	StyledInStockText,
	StyledProductInfoPrice,
	StyledProductInfoBtns,
	StyledProductInfo,
	StyledProductAdditionalInfo,
} from "../Styles/ProductInfo.style";

import StyledStarContainer, { StyledStar } from "../Styles/Star.style";

export default function ProductInfo() {
	const dispatch = useAppDispatch();
	const product = useAppSelector((state) => state.products.productToShow);
	const { title, price, rating, imgSrc, imgAlt } = product;
	const [stars, setStars] = useState<string[]>([]);

	useEffect(() => {
		let tempStars: string[] = [];
		for (let i = 0; i < rating; i++) {
			tempStars.push("0");
		}
		setStars(tempStars);
	}, [rating]);

	return (
		<StyledProductInfoContainer>
			<StyledStarContainer>
				{stars.map((star, i) => {
					return <StyledStar stylestar='styledstarinproductinfo' key={i} />;
				})}
			</StyledStarContainer>

			<StyledProductInfoText>{title}</StyledProductInfoText>

			<StyledProductInfoImage>
				<img src={imgSrc} alt={imgAlt} />
			</StyledProductInfoImage>

			<StyledProductInfo>
				<StyledProductInfoPrice>
					<div>
						<small>$</small>
						<span>{price.toFixed(0)}</span>
						<span>{((price % 10) * 100).toFixed(0)}</span>
					</div>
					<p>
						<span>${(price * 0.8 + 35).toFixed(2)}</span> Save <em>${(price * 0.8 + 35 - price).toFixed(2)} </em>(
						{(((price * 0.8 + 35 - price) * 100) / (price * 0.8 + 35)).toFixed(0)}%)
					</p>
				</StyledProductInfoPrice>

				<span>No import Fees Deposits & $11.45 Shipping to Israel</span>

				<StyledInStockText>In Stock.</StyledInStockText>

				<Select />

				<p>
					This item ships to <strong>Israel</strong>
				</p>

				<StyledProductInfoBtns>
					<StyledButton
						addToCartButton
						onClick={() => {
							dispatch(ADD_TO_CART(product));
						}}
						type='button'
					>
						Add to Cart
					</StyledButton>
				</StyledProductInfoBtns>

				<StyledProductAdditionalInfo>
					<table>
						<tbody>
							<tr>
								<td>Ships from</td>
								<td>Amazon.com</td>
							</tr>
							<tr>
								<td>Sold by </td>
								<td>Amazon.com</td>
							</tr>
						</tbody>
					</table>

					<p>
						Return policy: <span>Eligible for return, Refund of Replacement</span>
					</p>
					<p>Gift-wrap available</p>
				</StyledProductAdditionalInfo>
			</StyledProductInfo>
			<hr />
		</StyledProductInfoContainer>
	);
}

//  <StyledQuantitySelect
// 					name='quantity '
// 					value={quantity}
// 					onChange={(e: React.FormEvent<HTMLSelectElement>) => {
// 						getNewAmount(e.currentTarget.value);
// 					}}
// 				>
// 					<option value='1'> Qty: 1</option>
// 					<option value='2'>Qty: 2</option>
// 					<option value='3'>Qty: 3</option>
// 					<option value='4'> Qty:4</option>
// 					<option value='5'> Qty:5</option>
// 				</StyledQuantitySelect>
