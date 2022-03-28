import { useEffect, useState } from "react";
import { showDiscountAmount, ShowDiscountPriceWithNoDecimals, ShowPriceDecimals } from "../Assets/calculatePrice";
import { useAppDispatch, useAppSelector } from "../hooks";

import { ADD_TO_CART } from "../redux/slices/cartSlice";
import { UPDATE_PRODUCT_QUANTITY } from "../redux/slices/productsSlice";

import Select from "../Components/common/Select";

import StyledButton from "../Styles/Button.style";
import { StyledProductInfoImage } from "../Styles/Image.style";
import {
	StyledProductInfoContainer,
	StyledProductInfoText,
	StyledInStockText,
	StyledProductInfoPrice,
	StyledProductInfoBtns,
	StyledProductInfoBody,
	StyledProductAdditionalInfo,
	StyledProductInfoTop,
	StyledBreadcrumbs,
	StyledProductInfoTablePricesArea,
} from "../Styles/ProductInfo.style";

import StyledStarContainer, { StyledStar } from "../Styles/Star.style";

export default function ProductInfo(): JSX.Element {
	const dispatch = useAppDispatch();
	const product = useAppSelector((state) => state.products.productToShow);
	const { title, name, primery_price, discount, rating, imgSrc } = product;
	const [stars, setStars] = useState<string[]>([]);

	useEffect(() => {
		let tempArray: string[] = [];
		for (let i = 0; i < rating; i++) {
			tempArray.push("0");
		}
		setStars(tempArray);
	}, [rating]);

	const getNewAmount = (value: string): void => {
		let quantity: number = parseInt(value);
		dispatch(UPDATE_PRODUCT_QUANTITY(quantity));
	};

	return (
		<div>
			<StyledBreadcrumbs>
				<p>
					{product.category} {">"} {product.name}
				</p>
			</StyledBreadcrumbs>

			<StyledProductInfoContainer>
				<StyledProductInfoTop>
					<StyledStarContainer>
						{stars.map((star, i) => {
							return <StyledStar styledstarinproductinfo='styledstarinproductinfo' key={i} />;
						})}
					</StyledStarContainer>

					<StyledProductInfoText>{title}</StyledProductInfoText>

					<StyledProductInfoTablePricesArea>
						<hr />
						<table>
							<tbody>
								<tr>
									<td>List Price:</td>
									<td>${primery_price}</td>
								</tr>
								<tr>
									<td>Price:</td>
									<td>
										${ShowDiscountPriceWithNoDecimals(primery_price, discount)}
										{"."}
										{ShowPriceDecimals(primery_price, discount)}
									</td>
								</tr>
								<tr>
									<td>You Save:</td>
									<td>
										${showDiscountAmount(primery_price, discount)} ({discount}%)
									</td>
								</tr>
							</tbody>
						</table>
						<span>No import Fees Deposits & $11.45 Shipping to Israel</span>

						<hr />
					</StyledProductInfoTablePricesArea>
				</StyledProductInfoTop>

				<StyledProductInfoImage>
					<img src={imgSrc} alt={name} />
				</StyledProductInfoImage>

				<StyledProductInfoBody>
					<StyledProductInfoPrice>
						<div>
							<small>$</small>
							<span>{ShowDiscountPriceWithNoDecimals(primery_price, discount)}</span>
							<span>{ShowPriceDecimals(primery_price, discount)}</span>
						</div>
						<p>
							<span>${primery_price}</span> Save <em>${showDiscountAmount(primery_price, discount)} </em>({discount}%)
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
							Return policy: <small>Eligible for return, Refund of Replacement</small>
						</p>
						<p>Gift-wrap available</p>
					</StyledProductAdditionalInfo>
				</StyledProductInfoBody>
				<hr />
			</StyledProductInfoContainer>
		</div>
	);
}
