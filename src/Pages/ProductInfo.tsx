import React, { useEffect, useState } from "react";
import {
	showDiscount,
	showDiscountPrecentage,
	ShowPriceDecimals,
	ShowPriceWithNoDecimals,
	showPrimeryPrice,
} from "../Assets/calculatePrice";
import Select from "../Components/common/Select";
import { useAppDispatch, useAppSelector } from "../hooks";
import { ADD_TO_CART } from "../redux/slices/cartSlice";
import { UPDATE_PRODUCT_QUANTITY } from "../redux/slices/productsSlice";

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
	StyledProductInfoTop,
	StyledBreadcrumbs,
	StyledProductInfoTablePriceArea,
} from "../Styles/ProductInfo.style";

import StyledStarContainer, { StyledStar } from "../Styles/Star.style";

export default function ProductInfo() {
	const dispatch = useAppDispatch();
	const product = useAppSelector((state) => state.products.productToShow);
	const { title, primery_price, rating, imgSrc, imgAlt } = product;
	const [stars, setStars] = useState<string[]>([]);

	useEffect(() => {
		let tempStars: string[] = [];
		for (let i = 0; i < rating; i++) {
			tempStars.push("0");
		}
		setStars(tempStars);
	}, [rating]);

	const getNewAmount = (value: string) => {
		let quantity: number = parseInt(value);
		dispatch(UPDATE_PRODUCT_QUANTITY(quantity));
	};

	return (
		<div>
			<StyledBreadcrumbs>

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
						<span>{ShowPriceWithNoDecimals(primery_price)}</span>
						<span>{ShowPriceDecimals(primery_price)}</span>
					</div>
					<p>
						<span>${showPrimeryPrice(primery_price)}</span> Save <em>${showDiscount(primery_price)} </em>(
						{showDiscountPrecentage(primery_price)}%)
					</p>
				</StyledProductInfoPrice>

				<span>No import Fees Deposits & $11.45 Shipping to Israel</span>

				<StyledInStockText>In Stock.</StyledInStockText>

				<Select getAmount={getNewAmount} product={product} />

				<p>
					{product.category} {">"} {product.imgAlt}
				</p>
			</StyledBreadcrumbs>
			<StyledProductInfoContainer>
				<StyledProductInfoTop>
					<StyledStarContainer>
						{stars.map((star, i) => {
							return <StyledStar stylestar='styledstarinproductinfo' key={i} />;
						})}
					</StyledStarContainer>

					<StyledProductInfoText>{title}</StyledProductInfoText>

					<StyledProductInfoTablePriceArea>
						<hr />
						<table>
							<tbody>
								<tr>
									<td>List Price:</td>
									<td>${price}</td>
								</tr>
								<tr>
									<td>Price:</td>
									<td>${(price * 0.8 + 35).toFixed(2)}</td>
								</tr>
								<tr>
									<td>You Save:</td>
									<td>
										${showDiscount(price)} {showDiscountPrecentage(price)}%
									</td>
								</tr>
							</tbody>
						</table>
						<span>No import Fees Deposits & $11.45 Shipping to Israel</span>

						<hr />
					</StyledProductInfoTablePriceArea>
				</StyledProductInfoTop>

				<StyledProductInfoImage>
					<img src={imgSrc} alt={imgAlt} />
				</StyledProductInfoImage>

				<StyledProductInfo>
					<StyledProductInfoPrice>
						<div>
							<small>$</small>
							<span>{ShowPriceWithNoDecimals(price)}</span>
							<span>{ShowPriceDecimals(price)}</span>
						</div>
						<p>
							<span>${showPrimeryPrice(price)}</span> Save <em>${showDiscount(price)} </em>(
							{showDiscountPrecentage(price)}%)
						</p>
					</StyledProductInfoPrice>

					<span>No import Fees Deposits & $11.45 Shipping to Israel</span>

					<StyledInStockText>In Stock.</StyledInStockText>

					<Select getAmount={getNewAmount} product={product} />

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
		</div>
	);
}
