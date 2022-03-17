import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showPriceAfterDiscount } from "../../Assets/calculatePrice";
import type { RootState } from "../store";

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
		ADD_TO_CART: (state: typeof initialState, action: PayloadAction<ProductData>) => {
			let chosenProduct: ProductData = action.payload;

			let flag: boolean = false;
			let tempCart = state.cart.map((product) => {
				if (product.id === chosenProduct.id) {
					flag = true;
					return chosenProduct;
				} else {
					return product;
				}
			});

			if (!flag) {
				tempCart = [{ ...chosenProduct }, ...state.cart];
			}

			state.cart = [...tempCart];
		},

		UPDATE_PRODUCT_QUANTITY: (state: typeof initialState, action: PayloadAction<ProductToUPdate>) => {
			let chosenProductId: string = action.payload.id;
			let newquantity: number = action.payload.quantity;

			let tempCart = state.cart.map((product, i) => {
				if (product.id === chosenProductId) {
					let updateProduct = { ...product, quantity: newquantity };

					return updateProduct;
				} else return product;
			});

			state.cart = [...tempCart];
		},

		REMOVE_FROM_CART: (state: typeof initialState, action: PayloadAction<number>) => {
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
		let productPriceAfterDiscount = showPriceAfterDiscount(product.primery_price);

		tempTotal += product.quantity * productPriceAfterDiscount;
	});
	return tempTotal.toFixed(2);
};

export const { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_PRODUCT_QUANTITY } = cartSlice.actions;
export default cartSlice.reducer;
