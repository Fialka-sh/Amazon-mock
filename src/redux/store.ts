import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productsSlice from "./slices/productsSlice";
import userSlice from "./slices/userSlice";

//===  one way
export const store = configureStore({
	reducer: {
		cart: cartReducer,
		user: userSlice,
		products: productsSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

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
