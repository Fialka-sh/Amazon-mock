// Core
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { LOGIN_USER, LOGOUT_USER } from "redux/slices/userSlice";

import { auth } from "./Config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import products from "./Assets/productsList";
// Components
import Header from "./Components/header/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "Pages/Login";
import Register from "Pages/Register";

// Styles
import "./Styles/app.css";

export const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				dispatch(LOGIN_USER(currentUser.email));
			} else {
				dispatch(LOGOUT_USER(null));
			}
		});
	}, [dispatch, user]);

	return (
		<div className='app'>
			<Header />

			<Routes>
				<Route exact path='/' element={<Home products={products} />} />
				<Route exact path='/checkout' element={<Cart />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/register' element={<Register />} />
			</Routes>
		</div>
	);
};
