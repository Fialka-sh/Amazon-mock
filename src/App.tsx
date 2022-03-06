// Core
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "./hooks";
import { LOGIN_USER, LOGOUT_USER } from "./redux/slices/userSlice";

import { auth } from "./Config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import products from "./Assets/productsList";
// Components
import Header from "./Components/header/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// Styles
import "./Styles/app.css";

// type ProductData = {
// 	id: string;
// 	title: string;
// 	price: number;
// 	rating: number;
// 	imgSrc: string;
// 	imgAlt: string;
// 	quantity: number;
// };

export const App: React.FC = () => {
	const user = useAppSelector((state) => state.user.currentUser);
	const dispatch = useAppDispatch();
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
				<Route path='/' element={<Home {...products} />} />
				<Route path='/checkout' element={<Cart />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	);
};
