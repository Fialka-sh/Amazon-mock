// export {};
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../../Assets/productsList";

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

interface ProductsState {
	productsToShow: ProductData[];
	categoryToShow: string;
	productToShow: ProductData;
}

const initialState: ProductsState = {
	productsToShow: products,
	categoryToShow: "All",
	productToShow: {
		id: "",
		title: "",
		name: "",
		primery_price: 0,
		discount: 0,
		rating: 0,
		imgSrc: "",
		category: "",
		quantity: 1,
	},
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		SHOW_PRODUCTS: (state: typeof initialState, action: PayloadAction<string>) => {
			let chosenCategory: string = action.payload;
			if (chosenCategory === "All") {
				state.productsToShow = products;
				state.categoryToShow = "All";
			} else {
				let ProductsByCategory: ProductData[] = products.filter((product) => product.category === chosenCategory);
				state.productsToShow = ProductsByCategory;
				state.categoryToShow = chosenCategory;
			}
		},
		SHOW_PRODUCT_INFO: (state: typeof initialState, action: PayloadAction<ProductData>) => {
			let productShown: ProductData = action.payload;
			state.productToShow = { ...productShown, quantity: 1 };
		},
		UPDATE_PRODUCT_QUANTITY: (state: typeof initialState, action: PayloadAction<number>) => {
			state.productToShow = { ...state.productToShow, quantity: action.payload };
		},
	},
});

export const { SHOW_PRODUCTS, SHOW_PRODUCT_INFO, UPDATE_PRODUCT_QUANTITY } = productsSlice.actions;
export default productsSlice.reducer;
