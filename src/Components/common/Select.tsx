import React from "react";

import StyledQuantitySelect from "../../Styles/Select.style";

type ProductData = {
	id: string;
	title: string;
	name: string;
	primery_price: number;
	discount: number;
	rating: number;
	imgSrc: string;
	category: string;
	quantity: number;
};
export default function Select(props: { getAmount: Function; product: ProductData }): JSX.Element {
	const tempOptionArr = [1, 2, 3, 4, 5];
	return (
		<StyledQuantitySelect
			name='quantity '
			value={props.product.quantity}
			onChange={(e: React.FormEvent<HTMLSelectElement>) => {
				props.getAmount(e.currentTarget.value);
			}}
		>
			{tempOptionArr.map((option, i) => {
				return (
					<option key={i} value={i}>
						Qty: {i}
					</option>
				);
			})}
		</StyledQuantitySelect>
	);
}
