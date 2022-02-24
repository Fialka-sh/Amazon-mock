// Core
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProductsList } from "redux/slices/productsSlice";

// Components
import Header from "./Components/header/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

// Styles
import "./Styles/app.css";

export const App = () => {
	// const [cart, setCart] = useState([]);
	// const [numOfProducts, setNumOfProducts] = useState(0);
	// const [totalToPay, setTotalToPay] = useState(0);

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	console.log('q');
	// 	let products = [
	// 		{
	// 			id: "11",
	// 			title:
	// 				'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)',
	// 			price: 200,
	// 			rating: 4,
	// 			imgSrc: "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL640_QL65_.jpg",
	// 			imgAlt: "T.V screen",
	// 		},
	// 		{
	// 			id: "22",
	// 			title:
	// 				"Gaming Chair 350lb Big and Tall High Back Office Chair Ergonomic Racing Reclining Chair with 4D Armrests Swivel Tilt Rocker (White) ",
	// 			price: 150,
	// 			rating: 5,
	// 			imgSrc: "https://m.media-amazon.com/images/I/51kgTjI3RBL._AC_UL640_QL65_.jpg",
	// 			imgAlt: "Gaming chair",
	// 		},
	// 		{
	// 			id: "33",
	// 			title:
	// 				"Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction ",
	// 			price: 100,
	// 			rating: 5,
	// 			imgSrc: "https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL640_QL65_.jpg",
	// 			imgAlt: "Webcam",
	// 		},
	// 		{
	// 			id: "44",
	// 			title: "FITVII Smart Fitness Tracker Watch, Smartwatch with Heart Rate, Blood Pressure Monitor ",
	// 			price: 200,
	// 			rating: 1,
	// 			imgSrc: "https://m.media-amazon.com/images/I/61sXk7iPfYL._AC_UY436_QL65_.jpg",
	// 			imgAlt: "Fitness Tracker Watch",
	// 		},
	// 		{
	// 			id: "55",
	// 			title: "Sassy Stacks of Circles Stacking Ring STEM Learning Toy, Age 6+ Months, Multi, 9 Piece Set",
	// 			price: 50,
	// 			rating: 3,
	// 			imgSrc: "https://m.media-amazon.com/images/I/71NMrhZel6L._AC_UL640_QL65_.jpg",
	// 			imgAlt: "circles",
	// 		},
	// 		{
	// 			id: "66",
	// 			title: "MK270 Wireless Keyboard and Mouse Combo",
	// 			price: 100,
	// 			rating: 2,
	// 			imgSrc: "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL640_QL65_.jpg",
	// 			imgAlt: "wireless keyboard",
	// 		},
	// 	];
	// 	dispatch(createProductsList(products));
	// }, [dispatch]);

	let products = [
		{
			id: "11",
			title:
				'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)',
			price: 200,
			rating: 4,
			imgSrc: "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL640_QL65_.jpg",
			imgAlt: "T.V screen",
		},
		{
			id: "22",
			title:
				"Gaming Chair 350lb Big and Tall High Back Office Chair Ergonomic Racing Reclining Chair with 4D Armrests Swivel Tilt Rocker (White) ",
			price: 150,
			rating: 5,
			imgSrc: "https://m.media-amazon.com/images/I/51kgTjI3RBL._AC_UL640_QL65_.jpg",
			imgAlt: "Gaming chair",
		},
		{
			id: "33",
			title:
				"Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction ",
			price: 100,
			rating: 5,
			imgSrc: "https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL640_QL65_.jpg",
			imgAlt: "Webcam",
		},
		{
			id: "44",
			title: "FITVII Smart Fitness Tracker Watch, Smartwatch with Heart Rate, Blood Pressure Monitor ",
			price: 200,
			rating: 1,
			imgSrc: "https://m.media-amazon.com/images/I/61sXk7iPfYL._AC_UY436_QL65_.jpg",
			imgAlt: "Fitness Tracker Watch",
		},
		{
			id: "55",
			title: "Sassy Stacks of Circles Stacking Ring STEM Learning Toy, Age 6+ Months, Multi, 9 Piece Set",
			price: 50,
			rating: 3,
			imgSrc: "https://m.media-amazon.com/images/I/71NMrhZel6L._AC_UL640_QL65_.jpg",
			imgAlt: "circles",
		},
		{
			id: "66",
			title: "MK270 Wireless Keyboard and Mouse Combo",
			price: 100,
			rating: 2,
			imgSrc: "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL640_QL65_.jpg",
			imgAlt: "wireless keyboard",
		},
	];

	return (
		<div className='app'>
			<Header />

			<Routes>
				<Route exact path='/' element={<Home products={products} />} />
				<Route exact path='/checkout' element={<Cart />} />
			</Routes>
		</div>
	);
};
