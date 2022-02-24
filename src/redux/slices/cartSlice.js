import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
	},
	reducers: {
		addToCart: (state = this.initialState, action) => {
			let chosenProduct = action.payload;
			let flag = false;
			flag = state.cart.find(function (product) {
				if (product.id === chosenProduct.id) {
					product.quantity++;
					return true;
				} else return false;
			});
			if (!flag) {
				chosenProduct.quantity = 1;
				state.cart = [chosenProduct, ...state.cart];
			}
		},

		updateProductAmount: (state = this.initialState, action) => {
			let chosenProduct = action.payload.product;
			let newAmount = parseInt(action.payload.quantity);
			let tempCart = state.cart.map((product, i) => {
				if (product.id === chosenProduct.id) {
					chosenProduct = { ...chosenProduct, quantity: newAmount };
					return chosenProduct;
				} else return product;
			});
			state.cart = [...tempCart];
		},

		removeFromCart: (state = this.initiralState, action) => {
			let tempCart = state.cart.filter((product, i) => i !== action.payload);
			state.cart = [...tempCart];
		},
	},
});

export const updatTotalProducts = (state) => {
	let numOfProducts = 0;
	state.cart.cart.forEach((product) => {
		numOfProducts += product.quantity;
	});
	return numOfProducts;
};

export const updateTotaleToPay = (state) => {
	let tempTotal = 0;
	state.cart.cart.forEach((product) => {
		tempTotal += product.quantity * product.price;
	});
	return tempTotal;
};

export const { addToCart, removeFromCart, updateProductAmount } = cartSlice.actions;
export default cartSlice.reducer;
