// export {};
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../../Assets/productsList";

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

interface ProductsState {
	productsToShow: ProductData[];
	categoryToShow: string;
}

const initialState: ProductsState = {
	productsToShow: products,
	categoryToShow: "All",
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		SHOW_PRODUCTS: (state: typeof initialState, action: PayloadAction<string>) => {
			let chosenCategory: string = action.payload;
			console.log(chosenCategory);
			if (chosenCategory === "All") {
				state.productsToShow = products;
				state.categoryToShow = "All";
			} else {
				let ProductsByCategory: ProductData[] = products.filter((product) => product.category === chosenCategory);
				state.productsToShow = ProductsByCategory;
				state.categoryToShow = chosenCategory;
			}
		},
	},
});

export const { SHOW_PRODUCTS } = productsSlice.actions;
export default productsSlice.reducer;
