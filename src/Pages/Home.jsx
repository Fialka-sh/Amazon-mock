import React, { useState } from "react";

import Product from "../Components/common/Product";
import Slider from "Components/common/Slider";

import topBanner from "../Assets/topBanner.jpg";
import purimBanner from "../Assets/purimBanner.jpg";
import topBanner2 from "../Assets/topBanner2.jpg";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "../Styles/home.css";

export default function Home({ products }) {
	const banners = [topBanner, purimBanner, topBanner2];
	const [bannerIToShow, setBannerIToShow] = useState(0);

	const changeBanner = (i) => {
		if (i === 1 && bannerIToShow === banners.length - 1) {
			setBannerIToShow(0);
		} else if (i === -1 && bannerIToShow === 0) {
			setBannerIToShow(banners.length - 1);
		} else setBannerIToShow(bannerIToShow + i);
	};
	return (
		<div className='homeContainer'>
			<div className='home__topBanner'>
				<div className='home__topBanner_banner'>
					<Slider bannerToShow={banners[bannerIToShow]} />
				</div>
				<div className='home__topBanner_arrows'>
					<span
						className='home__topBanner_arrow'
						onClick={() => {
							changeBanner(1);
						}}
					>
						<ArrowBackIosIcon />
					</span>

					<span
						className='home__topBanner_arrow'
						onClick={() => {
							changeBanner(-1);
						}}
					>
						<ArrowForwardIosIcon />{" "}
					</span>
				</div>
			</div>
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
