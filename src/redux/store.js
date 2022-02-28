import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userSlice from "./slices/userSlice";

//===  one way
export const store = configureStore({
	reducer: {
		cart: cartReducer,
		user: userSlice,
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
