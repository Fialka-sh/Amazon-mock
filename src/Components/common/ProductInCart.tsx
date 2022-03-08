import React from "react";
import { useAppDispatch } from "../../hooks";

import { removeFromCart } from "../../redux/slices/cartSlice";
import { updateProductQuantity } from "../../redux/slices/cartSlice";
import { StyledProductInCartImage } from "../../Styles/Image.style";

import "../../Styles/productInCart.css";
import StyledProductInCartContainer, {
	StyledProductInCartInfo,
	StyledProductInCartPrice,
	StyledProductInCartPrInfoText,
	StyledInStockText,
	StyledProductInCartBtns,
} from "../../Styles/ProductInCart.style";
import { StyledQuantitySelect } from "../../Styles/Select.style";
import StyledButton from "../../Styles/Button.style";
type ProductData = {
	id: string;
	title: string;
	price: number;
	rating: number;
	imgSrc: string;
	imgAlt: string;
	quantity: number;
};

type ProductToUPdate = {
	id: string;
	quantity: number;
};

export default function ProductInCart(props: { product: ProductData; i: number }) {
	const { product, i } = props;
	const dispatch = useAppDispatch();

	const getNewAmount = (value: string) => {
		let quantity: number = parseInt(value);
		let objectTr: ProductToUPdate = {
			id: product.id,
			quantity: quantity,
		};
		dispatch(updateProductQuantity({ ...objectTr }));
	};

	return (
		<StyledProductInCartContainer key={i}>
			{/* <div className='productInCartContainer' key={i}> */}
			<StyledProductInCartImage>
				{/* <div className='product_img'> */}
				<img src={product?.imgSrc} alt={product?.imgAlt} />

				{/* </div> */}
			</StyledProductInCartImage>

			<StyledProductInCartInfo>
				{/* <div className='product_info'> */}
				{/* <div className='product_info_text'> */}
				<StyledProductInCartPrInfoText>
					{/* <p className='product_info_title'>  */}
					{product?.title}
					{/* </p> */}
				</StyledProductInCartPrInfoText>
				{/* <p> */}
				<StyledInStockText>In Stock</StyledInStockText>
				{/* </p> */}
				{/* </div> */}
				<StyledProductInCartBtns>
					{/* <div className='product_info_btns'> */}

					<StyledQuantitySelect
						// <select
						name='quantity '
						// id='quantity_select'
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
						{/* </select> */}
					</StyledQuantitySelect>

					<span className='product_info_btn_span'>|</span>

					<StyledButton
						removeProductButton
						//   <button
						//  className='removeProductBtn_btn'
						onClick={() => {
							dispatch(removeFromCart(i));
						}}
					>
						Remove from cart
						{/* </button> */}
					</StyledButton>
					{/* </div> */}
				</StyledProductInCartBtns>

				{/* </div> */}
			</StyledProductInCartInfo>

			<StyledProductInCartPrice>
				{/* <div className='product_price'> */}
				<strong>$</strong>
				<strong>{product?.price * product?.quantity}</strong>
				{/* </div> */}
			</StyledProductInCartPrice>
			{/* </div> */}
		</StyledProductInCartContainer>
	);
}
