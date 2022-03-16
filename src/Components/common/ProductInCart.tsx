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
// import StyledQuantitySelect from "../../Styles/Select.style";
import StyledButton from "../../Styles/Button.style";
import Select from "./Select";

type ProductData = {
	id: string;
	title: string;
	price: number;
	rating: number;
	imgSrc: string;
	imgAlt: string;
	category: string;
	quantity: number;
};

type ProductToUpdate = {
	id: string;
	quantity: number;
};

export default function ProductInCart(props: { product: ProductData; i: number }) {
	const { product, i } = props;
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
				<img src={product?.imgSrc} alt={product?.imgAlt} />
			</StyledProductInCartImage>

			<StyledProductInCartInfo>
				<StyledProductInCartPrInfoText>{product?.title}</StyledProductInCartPrInfoText>

				<StyledInStockText>In Stock</StyledInStockText>
				<StyledCategoryText>
					<em>Category: </em>
					{product?.category}
				</StyledCategoryText>

				<StyledProductInCartBtns>
					<Select getAmount={getNewAmount} product={product} />

					{/* <StyledQuantitySelect
						name='quantity '
						value={product?.quantity}
						onChange={(e: React.FormEvent<HTMLSelectElement>) => {
							getNewAmount(e.currentTarget.value);
						}}
					>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</StyledQuantitySelect> */}

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
				<strong>{(product?.price * product?.quantity).toFixed(2)}</strong>
			</StyledProductInCartPrice>
		</StyledProductInCartContainer>
	);
}
