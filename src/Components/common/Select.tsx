import React from "react";
import {
	// useAppDispatch,
	useAppSelector,
} from "../../hooks";
// import { UPDATE_PRODUCT_QUANTITY } from "../../redux/slices/productsSlice";
import StyledQuantitySelect from "../../Styles/Select.style";

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
export default function Select(props: { getAmount: Function; product: ProductData }): JSX.Element {
	// const product = useAppSelector((state) => state.products.productToShow);
	// const dispatch = useAppDispatch();

	// const getNewAmount = (value: string) => {
	// 	let quantity: number = parseInt(value);
	// 	dispatch(UPDATE_PRODUCT_QUANTITY(quantity));
	// };

	return (
		<StyledQuantitySelect
			name='quantity '
			value={props.product.quantity}
			onChange={(e: React.FormEvent<HTMLSelectElement>) => {
				props.getAmount(e.currentTarget.value);
			}}
		>
			<option value='1'>Qty: 1</option>
			<option value='2'>Qty: 2</option>
			<option value='3'>Qty: 3</option>
			<option value='4'>Qty: 4</option>
			<option value='5'>Qty: 5</option>
		</StyledQuantitySelect>
	);
}
