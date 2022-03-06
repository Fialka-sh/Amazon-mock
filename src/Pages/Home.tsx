import React, { useState } from "react";

import Product from "../Components/common/Product";
import Slider from "../Components/common/Slider";

// import topBanner from "../Assets/topBanner.jpg";
// import topBanner2 from "../Assets/topBanner2.jpg";
// import purimBanner from "../Assets/purimBanner.jpg";
import bannersList from "../Assets/bannersList";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "../Styles/home.css";

type ProductData = {
	id: string;
	title: string;
	price: number;
	rating: number;
	imgSrc: string;
	imgAlt: string;
	quantity: number;
};

export default function Home(products: ProductData[]) {
	const [bannerIToShow, setBannerIToShow] = useState<number>(0);
	let chosenBanner: string = bannersList[bannerIToShow];

	const changeBanner = (i: number) => {
		if (i === 1 && bannerIToShow === bannersList.length - 1) {
			setBannerIToShow(0);
		} else if (i === -1 && bannerIToShow === 0) {
			setBannerIToShow(bannersList.length - 1);
		} else setBannerIToShow(bannerIToShow + i);
	};
	return (
		<div className='homeContainer'>
			<div className='home__topBanner'>
				<div className='home__topBanner_banner'>
					<Slider banner={chosenBanner} />
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
					<Product {...products[0]} />
					<Product {...products[1]} />
				</div>
				<div className='centerIt home__rows_row'>
					<Product {...products[2]} />
					<Product {...products[3]} />
					<Product {...products[4]} />
				</div>
				<div className='home__rows_row centerIt'>
					<Product {...products[5]} />
				</div>
			</div>
		</div>
	);
}
