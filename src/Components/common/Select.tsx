import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { UPDATE_PRODUCT_QUANTITY } from "../../redux/slices/productsSlice";
import StyledQuantitySelect from "../../Styles/Select.style";

export default function Select() {
	const product = useAppSelector((state) => state.products.productToShow);
	const dispatch = useAppDispatch();

	const getNewAmount = (value: string) => {
		let quantity: number = parseInt(value);
		dispatch(UPDATE_PRODUCT_QUANTITY(quantity));
	};

	return (
		<StyledQuantitySelect
			name='quantity '
			value={product.quantity}
			onChange={(e: React.FormEvent<HTMLSelectElement>) => {
				getNewAmount(e.currentTarget.value);
			}}
		>
			<option value='1'> Qty: 1</option>
			<option value='2'>Qty: 2</option>
			<option value='3'>Qty: 3</option>
			<option value='4'> Qty:4</option>
			<option value='5'> Qty:5</option>
		</StyledQuantitySelect>
	);
}
