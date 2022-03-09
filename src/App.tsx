// Core
import React from "react";
import { Routes, Route } from "react-router-dom";

import { useAppDispatch } from "./hooks";
import { LOGIN_USER, LOGOUT_USER } from "./redux/slices/userSlice";

import { auth } from "./Config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import products from "./Assets/productsList";
import { GlobleStyles } from "./Styles/GlobalStyles";
// Components
import Header from "./Components/header/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export const App: React.FC = () => {
	const dispatch = useAppDispatch();

	onAuthStateChanged(auth, (currentUser) => {
		if (currentUser) {
			dispatch(LOGIN_USER(currentUser.email));
		} else {
			// dispatch(LOGOUT_USER(null));
			dispatch(LOGOUT_USER("USER"));
		}
	});

	return (
		<div>
			<GlobleStyles />
			<Header />

			<Routes>
				<Route path='/' element={<Home {...products} />} />
				<Route path='/checkout' element={<Cart />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	);
};
