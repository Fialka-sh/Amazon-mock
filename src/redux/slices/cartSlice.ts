import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type ProductData = {
	id: string;
	title: string;
	price: number;
	rating: number;
	imgSrc: string;
	imgAlt: string;
	quantity: number;
};

interface CartState {
	cart: ProductData[];
}

const initialState: CartState = {
	cart: [],
};

type ProductToUPdate = {
	id: string;
	quantity: number;
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state: typeof initialState, action: PayloadAction<ProductData>) => {
			let chosenProduct: ProductData = action.payload;
			let flag: boolean = false;
			let tempCart = state.cart.map((product) => {
				if (product.id === chosenProduct.id) {
					flag = true;

					let newQuantity = product.quantity + 1;
					let updateProduct = { ...product, quantity: newQuantity };

					return updateProduct;
				} else {
					return product;
				}
			});

			if (!flag) {
				chosenProduct = { ...chosenProduct, quantity: 1 };
				tempCart = [{ ...chosenProduct }, ...state.cart];
			}

			state.cart = [...tempCart];
		},

		updateProductQuantity: (state: typeof initialState, action: PayloadAction<ProductToUPdate>) => {
			let chosenProductId: string = action.payload.id;
			let newAmount: number = action.payload.quantity;

			let tempCart = state.cart.map((product, i) => {
				if (product.id === chosenProductId) {
					let updateProduct = { ...product, quantity: newAmount };

					return updateProduct;
				} else return product;
			});

			state.cart = [...tempCart];
		},

		removeFromCart: (state: typeof initialState, action: PayloadAction<number>) => {
			let tempCart: ProductData[] = state.cart.filter((product, i) => i !== action.payload);
			state.cart = [...tempCart];
		},
	},
});

export const updatTotalProducts = (state: RootState) => {
	let numOfProducts: number = 0;

	state.cart.cart.forEach((product) => {
		numOfProducts += product.quantity;
	});
	return numOfProducts;
};

export const updateTotaleToPay = (state: RootState) => {
	let tempTotal = 0;
	state.cart.cart.forEach((product) => {
		tempTotal += product.quantity * product.price;
	});
	return tempTotal.toFixed(2);
};

export const { addToCart, removeFromCart, updateProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;
