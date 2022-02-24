import React from "react";
// import {  useSelector } from "react-redux";

import topBanner from "../Assests/topBaner.jpg";
import Product from "../Components/common/Product";

import "../Styles/home.css";

export default function Home({ products }) {
	// const products = useSelector((state) => state.products);

	return (
		<div className='homeContainer'>
			<img className='home__banner' src={topBanner} alt='top-banner' />
			<div className='home__rows'>
				<div className='centerIt home__rows_row'>
					<Product product={products[0]} />
					<Product product={products[1]} />
				</div>
				<div className='centerIt home__rows_row'>
					<Product product={products[2]} />
					<Product product={products[3]} />
					<Product product={products[4]} />
				</div>
				<div className='home__rows_row centerIt'>
					<Product product={products[5]} />
				</div>
			</div>
		</div>
	);
}
