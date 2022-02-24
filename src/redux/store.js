import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

//===  one way
export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export default store;
//=====  2nd way
//===  create store and configure Redux DevTools extension
// export default configureStore({
// 	reducer: {
// 		cart: cartReducer,
// 	},
// });

// import { createStore } from "redux";
// import rootReducer from "./reducers";

// const store = {}; createStore(rootReducer);
